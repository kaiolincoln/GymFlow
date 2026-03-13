import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Payment } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { toast } from "sonner";

export default function Payments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [upcoming, setUpcoming] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const fetchPayments = () => {
    const params = statusFilter !== "ALL" ? `?status=${statusFilter}` : "";
    api.get<Payment[]>(`/payments${params}`)
      .then(setPayments)
      .catch(() => toast.error("Erro ao carregar pagamentos"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchPayments(); }, [statusFilter]);
  useEffect(() => {
    api.get<Payment[]>("/payments/upcoming").then(setUpcoming).catch(() => {});
  }, []);

  const markPayment = async (id: string, status: "PAID" | "OVERDUE") => {
    try {
      await api.patch(`/payments/${id}/status`, { status });
      toast.success("Status atualizado!");
      fetchPayments();
      api.get<Payment[]>("/payments/upcoming").then(setUpcoming).catch(() => {});
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const filtered = payments.filter((p) =>
    p.student?.user?.name?.toLowerCase().includes(search.toLowerCase()) ?? true
  );

  const renderTable = (data: Payment[]) => (
    <div className="glass-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Aluno</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Vencimento</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[120px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Nenhum pagamento</TableCell></TableRow>
          ) : (
            data.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.student?.user?.name || "—"}</TableCell>
                <TableCell>R$ {Number(p.amount).toFixed(2)}</TableCell>
                <TableCell>{new Date(p.dueDate).toLocaleDateString("pt-BR")}</TableCell>
                <TableCell>
                  <Badge variant={p.status === "PAID" ? "default" : p.status === "OVERDUE" ? "destructive" : "secondary"}>
                    {p.status === "PAID" ? "Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {p.status === "PENDING" && (
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" onClick={() => markPayment(p.id, "PAID")}>Pagar</Button>
                      <Button size="sm" variant="ghost" onClick={() => markPayment(p.id, "OVERDUE")}>Vencer</Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Pagamentos</h1>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="upcoming">Próximos 7 dias ({upcoming.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="flex flex-col gap-3 sm:flex-row mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar por aluno..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Todos</SelectItem>
                <SelectItem value="PAID">Pagos</SelectItem>
                <SelectItem value="PENDING">Pendentes</SelectItem>
                <SelectItem value="OVERDUE">Vencidos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {loading ? <div className="glass-card h-64 animate-pulse" /> : renderTable(filtered)}
        </TabsContent>

        <TabsContent value="upcoming">
          {renderTable(upcoming)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
