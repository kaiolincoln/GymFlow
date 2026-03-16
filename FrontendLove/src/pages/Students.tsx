import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Student, StudentsResponse } from "@/lib/types";
import { Plus, Search, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import { toast } from "sonner";

const statusMap = {
  ACTIVE: { label: "Ativo", variant: "default" as const },
  INACTIVE: { label: "Inativo", variant: "secondary" as const },
  OVERDUE: { label: "Inadimplente", variant: "destructive" as const },
};

const planLabels: Record<string, string> = {
  MONTHLY: "Mensal",
  QUARTERLY: "Trimestral",
  SEMIANNUAL: "Semestral",
  ANNUAL: "Anual",
};

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    goal: "",
    plan: "MONTHLY",
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchStudents = () => {
    setLoading(true);
    const params = statusFilter !== "ALL" ? `?status=${statusFilter}` : "";
    api.get<StudentsResponse | Student[]>(`/students${params}`)
      .then((data) => {
        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          setStudents((data as StudentsResponse).students ?? []);
        }
      })
      .catch(() => toast.error("Erro ao carregar alunos"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchStudents();
  }, [statusFilter]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/students", formData);
      toast.success("Aluno cadastrado com sucesso!");
      setDialogOpen(false);
      setFormData({ name: "", email: "", password: "", phone: "", goal: "", plan: "MONTHLY" });
      fetchStudents();
    } catch (err: any) {
      toast.error(err.message || "Erro ao cadastrar aluno");
    } finally {
      setSubmitting(false);
    }
  };

  const filtered = students.filter((s) =>
    s.user.name.toLowerCase().includes(search.toLowerCase()) ||
    s.user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Alunos</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="glow">
              <Plus className="h-4 w-4 mr-2" />
              Novo Aluno
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Cadastrar Aluno</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Nome</Label>
                  <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Senha</Label>
                  <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Telefone</Label>
                  <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Objetivo</Label>
                  <Input value={formData.goal} onChange={(e) => setFormData({ ...formData, goal: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Plano</Label>
                  <Select value={formData.plan} onValueChange={(v) => setFormData({ ...formData, plan: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MONTHLY">Mensal</SelectItem>
                      <SelectItem value="QUARTERLY">Trimestral</SelectItem>
                      <SelectItem value="SEMIANNUAL">Semestral</SelectItem>
                      <SelectItem value="ANNUAL">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" variant="glow" className="w-full" disabled={submitting}>
                {submitting ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Todos</SelectItem>
            <SelectItem value="ACTIVE">Ativos</SelectItem>
            <SelectItem value="INACTIVE">Inativos</SelectItem>
            <SelectItem value="OVERDUE">Inadimplentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plano</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[60px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              [...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  {[...Array(5)].map((_, j) => (
                    <TableCell key={j}><div className="h-4 w-20 animate-pulse rounded bg-muted" /></TableCell>
                  ))}
                </TableRow>
              ))
            ) : filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Nenhum aluno encontrado
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((s, i) => (
                <motion.tr
                  key={s.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border"
                >
                  <TableCell className="font-medium">{s.user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{s.user.email}</TableCell>
                  <TableCell>{planLabels[s.plan]}</TableCell>
                  <TableCell>
                    <Badge variant={statusMap[s.status].variant}>{statusMap[s.status].label}</Badge>
                  </TableCell>
                  <TableCell>
                    <Link to={`/students/${s.id}`}>
                      <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                    </Link>
                  </TableCell>
                </motion.tr>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}