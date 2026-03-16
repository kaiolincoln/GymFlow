import { ArrowLeft, Trash2, User, CreditCard, Dumbbell, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutPlanDetailDialog } from "./WorkoutPlanDetailDialog";
import { Student, WorkoutPlan, BodyRecord } from "@/lib/types";
import { useParams, useNavigate } from "react-router-dom";
import { planLabels, statusLabels } from "./constants";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TabPayments } from "./TabPayments";
import { useEffect, useState } from "react";
import { TabWorkouts } from "./TabWorkouts";
import { TabInfo } from "./TabInfo";
import { TabBody } from "./TabBody";
import { api } from "@/lib/api";
import { toast } from "sonner";

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

        <TabsContent value="info">
          <TabInfo
            student={student}
            editData={editData}
            setEditData={setEditData}
            onSave={handleSave}
            saving={saving}
          />
        </TabsContent>

        <TabsContent value="payments">
          <TabPayments
            payments={student.payments}
            paymentDialog={paymentDialog}
            setPaymentDialog={setPaymentDialog}
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            onSubmit={handlePayment}
            onMarkPayment={markPayment}
          />
        </TabsContent>

        <TabsContent value="workouts">
          <TabWorkouts
            workoutPlans={student.workoutPlans}
            onView={viewPlanDetail}
          />
        </TabsContent>

        <TabsContent value="body">
          <TabBody
            bodyRecords={bodyRecords}
            chartData={chartData}
            lastRecord={lastRecord}
            bodyDialog={bodyDialog}
            setBodyDialog={setBodyDialog}
            bodyForm={bodyForm}
            setBodyForm={setBodyForm}
            onSubmit={handleSaveBody}
            savingBody={savingBody}
          />
        </TabsContent>
      </Tabs>

      <WorkoutPlanDetailDialog
        detailPlan={detailPlan}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        onClose={() => setDetailPlan(null)}
      />
    </div>
  );
}