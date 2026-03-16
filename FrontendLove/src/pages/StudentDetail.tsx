import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "@/lib/api";
import { Student, WorkoutPlan, BodyRecord, Payment } from "@/lib/types";
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
import {
  ArrowLeft, Save, Trash2, Plus, User, CreditCard,
  Dumbbell, TrendingUp, Phone, Target, Calendar,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const planLabels: Record<string, string> = {
  MONTHLY: "Mensal",
  QUARTERLY: "Trimestral",
  SEMIANNUAL: "Semestral",
  ANNUAL: "Anual",
};

const statusLabels: Record<string, string> = {
  ACTIVE: "Ativo",
  INACTIVE: "Inativo",
  OVERDUE: "Inadimplente",
};

// ─── Tooltip do gráfico ───────────────────────────────────────────────────────

const BodyTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-xs space-y-1">
        <p className="font-semibold mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name === "weight" ? "Peso" : p.name === "bodyFat" ? "% Gordura" : p.name}: {p.value}
            {p.name === "weight" ? " kg" : p.name === "bodyFat" ? "%" : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ─── Página principal ─────────────────────────────────────────────────────────

export default function StudentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user: authUser } = useAuth();

  const [student, setStudent] = useState<Student | null>(null);
  const [bodyRecords, setBodyRecords] = useState<BodyRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState({ phone: "", goal: "", plan: "MONTHLY", status: "ACTIVE" });
  const [saving, setSaving] = useState(false);

  // Dialogs
  const [paymentDialog, setPaymentDialog] = useState(false);
  const [paymentData, setPaymentData] = useState({ amount: "", dueDate: "", note: "" });
  const [bodyDialog, setBodyDialog] = useState(false);
  const [bodyForm, setBodyForm] = useState({ weight: "", height: "", bodyFat: "", notes: "" });
  const [savingBody, setSavingBody] = useState(false);

  // Ficha detalhe
  const [detailPlan, setDetailPlan] = useState<WorkoutPlan | null>(null);
  const [activeDay, setActiveDay] = useState(0);

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

  const fetchBodyRecords = () => {
    api.get<BodyRecord[]>(`/students/${id}/body-records`)
      .then(setBodyRecords)
      .catch(() => {});
  };

  useEffect(() => {
    fetchStudent();
    fetchBodyRecords();
  }, [id]);

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

  const handleSaveBody = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingBody(true);
    try {
      await api.post(`/students/${id}/body-records`, {
        weight: bodyForm.weight ? Number(bodyForm.weight) : undefined,
        height: bodyForm.height ? Number(bodyForm.height) : undefined,
        bodyFat: bodyForm.bodyFat ? Number(bodyForm.bodyFat) : undefined,
        notes: bodyForm.notes || undefined,
      });
      toast.success("Medidas registradas!");
      setBodyDialog(false);
      setBodyForm({ weight: "", height: "", bodyFat: "", notes: "" });
      fetchBodyRecords();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSavingBody(false);
    }
  };

  const markPayment = async (paymentId: string, status: "PAID" | "OVERDUE") => {
    try {
      await api.patch(`/payments/${paymentId}/status`, { status });
      toast.success(`Marcado como ${status === "PAID" ? "pago" : "vencido"}`);
      fetchStudent();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const viewPlanDetail = async (planId: string) => {
    try {
      const data = await api.get<WorkoutPlan>(`/workout-plans/${planId}`);
      setDetailPlan(data);
      setActiveDay(0);
    } catch {
      toast.error("Erro ao carregar ficha");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!student) return <p className="text-muted-foreground">Aluno não encontrado.</p>;

  // Dados do gráfico
  const chartData = [...bodyRecords]
    .sort((a, b) => new Date(a.recordedAt).getTime() - new Date(b.recordedAt).getTime())
    .map((r) => ({
      date: new Date(r.recordedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
      weight: r.weight ? Number(r.weight) : undefined,
      bodyFat: r.bodyFat ? Number(r.bodyFat) : undefined,
    }));

  const lastRecord = bodyRecords.length > 0
    ? [...bodyRecords].sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime())[0]
    : null;

  const paidCount = student.payments?.filter((p) => p.status === "PAID").length ?? 0;
  const overdueCount = student.payments?.filter((p) => p.status === "OVERDUE").length ?? 0;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
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

      {/* Cards de resumo */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="glass-card p-4">
          <p className="text-xs text-muted-foreground mb-1">Plano</p>
          <p className="font-display font-semibold">{planLabels[student.plan]}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-xs text-muted-foreground mb-1">Status</p>
          <Badge variant={student.status === "ACTIVE" ? "default" : student.status === "OVERDUE" ? "destructive" : "secondary"}>
            {statusLabels[student.status]}
          </Badge>
        </div>
        <div className="glass-card p-4">
          <p className="text-xs text-muted-foreground mb-1">Pagamentos</p>
          <p className="font-display font-semibold">
            <span className="text-success">{paidCount} pagos</span>
            {overdueCount > 0 && <span className="text-destructive ml-2">{overdueCount} vencidos</span>}
          </p>
        </div>
        <div className="glass-card p-4">
          <p className="text-xs text-muted-foreground mb-1">Fichas</p>
          <p className="font-display font-semibold">{student.workoutPlans?.length ?? 0} cadastradas</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="info">
        <TabsList className="mb-6">
          <TabsTrigger value="info">
            <User className="h-4 w-4 mr-1.5" />Informações
          </TabsTrigger>
          <TabsTrigger value="payments">
            <CreditCard className="h-4 w-4 mr-1.5" />Pagamentos ({student.payments?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="workouts">
            <Dumbbell className="h-4 w-4 mr-1.5" />Fichas ({student.workoutPlans?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="body">
            <TrendingUp className="h-4 w-4 mr-1.5" />Evolução ({bodyRecords.length})
          </TabsTrigger>
        </TabsList>

        {/* ── ABA INFORMAÇÕES ── */}
        <TabsContent value="info">
          <div className="glass-card p-6 max-w-lg space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-muted-foreground" /> Telefone
              </Label>
              <Input
                value={editData.phone}
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-muted-foreground" /> Objetivo
              </Label>
              <Input
                value={editData.goal}
                onChange={(e) => setEditData({ ...editData, goal: e.target.value })}
                placeholder="Ex: Hipertrofia, emagrecimento..."
              />
            </div>
            {student.birthDate && (
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" /> Data de Nascimento
                </Label>
                <p className="text-sm text-muted-foreground">
                  {new Date(student.birthDate).toLocaleDateString("pt-BR")}
                </p>
              </div>
            )}
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
              <Save className="h-4 w-4 mr-2" /> {saving ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </TabsContent>

        {/* ── ABA PAGAMENTOS ── */}
        <TabsContent value="payments">
          <div className="mb-4">
            <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
              <DialogTrigger asChild>
                <Button variant="glow" size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Novo Pagamento
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Registrar Pagamento</DialogTitle></DialogHeader>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Valor (R$)</Label>
                    <Input type="number" step="0.01" value={paymentData.amount} onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Vencimento</Label>
                    <Input type="date" value={paymentData.dueDate} onChange={(e) => setPaymentData({ ...paymentData, dueDate: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Observação <span className="text-muted-foreground text-xs">(opcional)</span></Label>
                    <Input value={paymentData.note} onChange={(e) => setPaymentData({ ...paymentData, note: e.target.value })} />
                  </div>
                  <Button type="submit" variant="glow" className="w-full">Registrar</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-3">
            {student.payments?.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
                <CreditCard className="h-12 w-12 text-muted-foreground/30" />
                <p className="text-muted-foreground text-sm">Nenhum pagamento registrado.</p>
              </div>
            )}
            {student.payments
              ?.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
              .map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="glass-card p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">
                      R$ {Number(p.amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Venc.: {new Date(p.dueDate).toLocaleDateString("pt-BR")}
                      {p.paidAt && ` · Pago em ${new Date(p.paidAt).toLocaleDateString("pt-BR")}`}
                    </p>
                    {p.note && <p className="text-xs text-muted-foreground mt-0.5">{p.note}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      p.status === "PAID" ? "default" :
                      p.status === "OVERDUE" ? "destructive" : "secondary"
                    }>
                      {p.status === "PAID" ? "✓ Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
                    </Badge>
                    {p.status === "PENDING" && (
                      <>
                        <Button size="sm" variant="ghost" onClick={() => markPayment(p.id, "PAID")}>Pagar</Button>
                        <Button size="sm" variant="ghost" onClick={() => markPayment(p.id, "OVERDUE")}>Vencer</Button>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </TabsContent>

        {/* ── ABA FICHAS ── */}
        <TabsContent value="workouts">
          <div className="space-y-3">
            {student.workoutPlans?.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
                <Dumbbell className="h-12 w-12 text-muted-foreground/30" />
                <p className="text-muted-foreground text-sm">Nenhuma ficha cadastrada.</p>
                <p className="text-xs text-muted-foreground">Crie uma ficha na página de Fichas de Treino.</p>
              </div>
            )}
            {student.workoutPlans?.map((wp, i) => (
              <motion.div
                key={wp.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="glass-card p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-display font-semibold">{wp.name}</p>
                  {wp.description && (
                    <p className="text-xs text-muted-foreground">{wp.description}</p>
                  )}
                  {wp.days && wp.days.length > 0 && (
                    <div className="flex gap-1 mt-1.5">
                      {wp.days.map((d) => (
                        <span key={d.id} className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                          {d.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={wp.active ? "default" : "secondary"}>
                    {wp.active ? "Ativa" : "Inativa"}
                  </Badge>
                  <Button size="sm" variant="ghost" onClick={() => viewPlanDetail(wp.id)}>
                    Ver
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* ── ABA EVOLUÇÃO ── */}
        <TabsContent value="body">
          <div className="space-y-6">
            {/* Cards de última medida */}
            {lastRecord && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {lastRecord.weight && (
                  <div className="glass-card p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Peso atual</p>
                    <p className="font-display text-2xl font-bold">
                      {Number(lastRecord.weight).toFixed(1)}
                      <span className="text-sm text-muted-foreground ml-1">kg</span>
                    </p>
                  </div>
                )}
                {lastRecord.height && (
                  <div className="glass-card p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Altura</p>
                    <p className="font-display text-2xl font-bold">
                      {Number(lastRecord.height).toFixed(2)}
                      <span className="text-sm text-muted-foreground ml-1">m</span>
                    </p>
                  </div>
                )}
                {lastRecord.bodyFat && (
                  <div className="glass-card p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">% Gordura</p>
                    <p className="font-display text-2xl font-bold">
                      {Number(lastRecord.bodyFat).toFixed(1)}
                      <span className="text-sm text-muted-foreground ml-1">%</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Gráfico */}
            {chartData.length > 1 ? (
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold mb-4">Evolução ao longo do tempo</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} width={35} />
                    <Tooltip content={<BodyTooltip />} />
                    <Legend formatter={(v) => v === "weight" ? "Peso (kg)" : "% Gordura"} />
                    <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} connectNulls />
                    <Line type="monotone" dataKey="bodyFat" stroke="hsl(var(--warning))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} connectNulls />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground/30" />
                <p className="font-display font-semibold text-muted-foreground">
                  {chartData.length === 0 ? "Nenhuma medida registrada" : "Registre mais medidas para ver o gráfico"}
                </p>
              </div>
            )}

            {/* Botão registrar medidas */}
            <Dialog open={bodyDialog} onOpenChange={setBodyDialog}>
              <DialogTrigger asChild>
                <Button variant="glow" size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Registrar Medidas
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Registrar Medidas Corporais</DialogTitle></DialogHeader>
                <form onSubmit={handleSaveBody} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Peso (kg)</Label>
                      <Input type="number" step="0.1" placeholder="75.5" value={bodyForm.weight} onChange={(e) => setBodyForm({ ...bodyForm, weight: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Altura (m)</Label>
                      <Input type="number" step="0.01" placeholder="1.78" value={bodyForm.height} onChange={(e) => setBodyForm({ ...bodyForm, height: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>% Gordura</Label>
                      <Input type="number" step="0.1" placeholder="18.5" value={bodyForm.bodyFat} onChange={(e) => setBodyForm({ ...bodyForm, bodyFat: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Observações</Label>
                      <Input placeholder="Opcional" value={bodyForm.notes} onChange={(e) => setBodyForm({ ...bodyForm, notes: e.target.value })} />
                    </div>
                  </div>
                  <Button type="submit" variant="glow" className="w-full" disabled={savingBody}>
                    {savingBody ? "Salvando..." : "Salvar Medidas"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Histórico de medidas */}
            {bodyRecords.length > 0 && (
              <div>
                <h3 className="font-display font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wider">
                  Histórico
                </h3>
                <div className="space-y-2">
                  {[...bodyRecords]
                    .sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime())
                    .map((r, i) => (
                      <motion.div
                        key={r.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="glass-card p-3 flex items-center justify-between"
                      >
                        <p className="text-xs text-muted-foreground">
                          {new Date(r.recordedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                        </p>
                        <div className="flex gap-4 text-sm">
                          {r.weight && <span>{Number(r.weight).toFixed(1)} kg</span>}
                          {r.bodyFat && <span className="text-warning">{Number(r.bodyFat).toFixed(1)}%</span>}
                          {r.height && <span className="text-muted-foreground">{Number(r.height).toFixed(2)} m</span>}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialog detalhe de ficha */}
      <Dialog open={!!detailPlan} onOpenChange={(v) => { if (!v) setDetailPlan(null); }}>
        <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {detailPlan?.name}
              <Badge variant={detailPlan?.active ? "default" : "secondary"}>
                {detailPlan?.active ? "Ativa" : "Inativa"}
              </Badge>
            </DialogTitle>
          </DialogHeader>
          {detailPlan?.description && (
            <p className="text-sm text-muted-foreground -mt-2">{detailPlan.description}</p>
          )}
          {detailPlan?.days && detailPlan.days.length > 0 && (
            <div>
              <div className="flex gap-2 flex-wrap mb-4">
                {detailPlan.days.map((d, i) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDay(i)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      activeDay === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {detailPlan.days[activeDay]?.exercises.map((ex, i) => (
                  <div key={ex.id} className="glass-card p-3 flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {ex.exercise.gifUrl && (
                      <img src={ex.exercise.gifUrl} alt={ex.exercise.name} className="h-12 w-12 rounded-lg object-cover hidden sm:block flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{ex.exercise.name}</p>
                      <p className="text-xs text-muted-foreground">{ex.exercise.muscleGroup}</p>
                    </div>
                    <div className="text-right text-sm flex-shrink-0">
                      <p className="font-semibold">{ex.sets}×{ex.reps}</p>
                      {ex.load && <p className="text-xs text-muted-foreground">{ex.load}</p>}
                      {ex.rest && <p className="text-xs text-muted-foreground">⏱ {ex.rest}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}