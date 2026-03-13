import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "@/lib/api";
import { Student } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, Save, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const planLabels: Record<string, string> = {
  MONTHLY: "Mensal",
  QUARTERLY: "Trimestral",
  SEMIANNUAL: "Semestral",
  ANNUAL: "Anual",
};

export default function StudentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user: authUser } = useAuth();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState({ phone: "", goal: "", plan: "MONTHLY", status: "ACTIVE" });
  const [saving, setSaving] = useState(false);
  const [paymentDialog, setPaymentDialog] = useState(false);
  const [paymentData, setPaymentData] = useState({ amount: "", dueDate: "", note: "" });

  const fetchStudent = () => {
    api.get<Student>(`/students/${id}`)
      .then((data) => {
        setStudent(data);
        setEditData({
          phone: data.phone || "",
          goal: data.goal || "",
          plan: data.plan,
          status: data.status,
        });
      })
      .catch(() => toast.error("Aluno não encontrado"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchStudent(); }, [id]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put(`/students/${id}`, editData);
      toast.success("Aluno atualizado!");
      fetchStudent();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Tem certeza que deseja excluir este aluno?")) return;
    try {
      await api.delete(`/students/${id}`);
      toast.success("Aluno excluído!");
      navigate("/students");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post(`/students/${id}/payments`, {
        amount: Number(paymentData.amount),
        dueDate: paymentData.dueDate,
        note: paymentData.note || undefined,
      });
      toast.success("Pagamento registrado!");
      setPaymentDialog(false);
      setPaymentData({ amount: "", dueDate: "", note: "" });
      fetchStudent();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const markPayment = async (paymentId: string, status: "PAID" | "OVERDUE") => {
    try {
      await api.patch(`/payments/${paymentId}/status`, { status });
      toast.success(`Pagamento marcado como ${status === "PAID" ? "pago" : "vencido"}`);
      fetchStudent();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64"><div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;
  if (!student) return <p className="text-muted-foreground">Aluno não encontrado.</p>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => navigate("/students")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="font-display text-3xl font-bold">{student.user.name}</h1>
          <p className="text-muted-foreground">{student.user.email}</p>
        </div>
        {authUser?.role === "ADMIN" && (
          <Button variant="destructive" size="sm" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-1" /> Excluir
          </Button>
        )}
      </div>

      <Tabs defaultValue="info">
        <TabsList className="mb-6">
          <TabsTrigger value="info">Informações</TabsTrigger>
          <TabsTrigger value="payments">Pagamentos ({student.payments?.length || 0})</TabsTrigger>
          <TabsTrigger value="workouts">Fichas ({student.workoutPlans?.length || 0})</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <div className="glass-card p-6 max-w-lg space-y-4">
            <div className="space-y-2">
              <Label>Telefone</Label>
              <Input value={editData.phone} onChange={(e) => setEditData({ ...editData, phone: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Objetivo</Label>
              <Input value={editData.goal} onChange={(e) => setEditData({ ...editData, goal: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Plano</Label>
                <Select value={editData.plan} onValueChange={(v) => setEditData({ ...editData, plan: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MONTHLY">Mensal</SelectItem>
                    <SelectItem value="QUARTERLY">Trimestral</SelectItem>
                    <SelectItem value="SEMIANNUAL">Semestral</SelectItem>
                    <SelectItem value="ANNUAL">Anual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={editData.status} onValueChange={(v) => setEditData({ ...editData, status: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Ativo</SelectItem>
                    <SelectItem value="INACTIVE">Inativo</SelectItem>
                    <SelectItem value="OVERDUE">Inadimplente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button variant="glow" onClick={handleSave} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> {saving ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <div className="mb-4">
            <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
              <DialogTrigger asChild>
                <Button variant="glow" size="sm"><Plus className="h-4 w-4 mr-1" /> Novo Pagamento</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Registrar Pagamento</DialogTitle></DialogHeader>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2"><Label>Valor (R$)</Label><Input type="number" step="0.01" value={paymentData.amount} onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })} required /></div>
                  <div className="space-y-2"><Label>Vencimento</Label><Input type="date" value={paymentData.dueDate} onChange={(e) => setPaymentData({ ...paymentData, dueDate: e.target.value })} required /></div>
                  <div className="space-y-2"><Label>Observação</Label><Input value={paymentData.note} onChange={(e) => setPaymentData({ ...paymentData, note: e.target.value })} /></div>
                  <Button type="submit" variant="glow" className="w-full">Registrar</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-3">
            {student.payments?.length === 0 && <p className="text-muted-foreground text-sm">Nenhum pagamento registrado.</p>}
            {student.payments?.map((p) => (
              <div key={p.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">R$ {Number(p.amount).toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">Vencimento: {new Date(p.dueDate).toLocaleDateString("pt-BR")}</p>
                  {p.note && <p className="text-xs text-muted-foreground mt-1">{p.note}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={p.status === "PAID" ? "default" : p.status === "OVERDUE" ? "destructive" : "secondary"}>
                    {p.status === "PAID" ? "Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
                  </Badge>
                  {p.status === "PENDING" && (
                    <>
                      <Button size="sm" variant="ghost" onClick={() => markPayment(p.id, "PAID")}>Pagar</Button>
                      <Button size="sm" variant="ghost" onClick={() => markPayment(p.id, "OVERDUE")}>Vencer</Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="workouts">
          <div className="space-y-3">
            {student.workoutPlans?.length === 0 && <p className="text-muted-foreground text-sm">Nenhuma ficha cadastrada.</p>}
            {student.workoutPlans?.map((wp) => (
              <div key={wp.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{wp.name}</p>
                  {wp.description && <p className="text-xs text-muted-foreground">{wp.description}</p>}
                </div>
                <Badge variant={wp.active ? "default" : "secondary"}>{wp.active ? "Ativa" : "Inativa"}</Badge>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
