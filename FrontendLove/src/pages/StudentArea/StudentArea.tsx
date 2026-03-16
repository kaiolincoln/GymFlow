import { useEffect, useState } from "react";
import { Dumbbell, CreditCard, Activity, TrendingUp, Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutPlan, WorkoutDay, Payment, BodyRecord } from "@/lib/types";
import { FloatingChat } from "@/components/Chat/FloatingChat";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";
import { WorkoutExecutionMode } from "./WorkoutExecutionMode";
import { TabWorkout } from "./TabWorkout";
import { TabBody } from "./TabBody";
import { TabPayments } from "./TabPayments";
import { TabPlans } from "./TabPlans";

export default function StudentArea() {
  const { user } = useAuth();
  const studentId = user?.studentId;

  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [bodyRecords, setBodyRecords] = useState<BodyRecord[]>([]);

  // Ficha padrão (a marcada como ativa no backend)
  const [defaultActivePlan, setDefaultActivePlan] = useState<WorkoutPlan | null>(null);
  // Ficha sendo visualizada (pode ser trocada pelo aluno)
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);

  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState(0);
  const [executingDay, setExecutingDay] = useState<WorkoutDay | null>(null);

  const fetchBodyRecords = () => {
    if (!studentId) return;
    api.get<BodyRecord[]>(`/students/${studentId}/body-records`)
      .then(setBodyRecords)
      .catch(() => {});
  };

  useEffect(() => {
    if (!studentId) return;
    Promise.all([
      api.get<WorkoutPlan[]>(`/students/${studentId}/workout-plans`),
      api.get<Payment[]>(`/students/${studentId}/payments`),
      api.get<BodyRecord[]>(`/students/${studentId}/body-records`),
    ])
      .then(([wp, pay, br]) => {
        setPlans(wp);
        setPayments(pay);
        setBodyRecords(br);
        const active = wp.find((p) => p.active);
        if (active) {
          api.get<WorkoutPlan>(`/workout-plans/${active.id}`).then((fullPlan) => {
            setDefaultActivePlan(fullPlan);
            setSelectedPlan(fullPlan);
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [studentId]);

  // Quando o aluno escolhe outra ficha no selector
  const handleSelectPlan = async (planId: string) => {
    try {
      const fullPlan = await api.get<WorkoutPlan>(`/workout-plans/${planId}`);
      setSelectedPlan(fullPlan);
      setActiveDay(0);
    } catch {
      // silently fail
    }
  };

  if (!studentId) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Você não está vinculado como aluno.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  const chartData = [...bodyRecords]
    .sort((a, b) => new Date(a.recordedAt).getTime() - new Date(b.recordedAt).getTime())
    .map((r) => ({
      date: new Date(r.recordedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
      weight: r.weight ? Number(r.weight) : undefined,
      bodyFat: r.bodyFat ? Number(r.bodyFat) : undefined,
    }));

  const lastRecord = bodyRecords.length > 0
    ? bodyRecords.sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime())[0]
    : null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-1">Minha Área</h1>
        <p className="text-muted-foreground">
          Olá, <span className="text-foreground font-medium">{user?.name}</span>! Bora treinar? 💪
        </p>
      </div>

      <Tabs defaultValue="workout">
        <TabsList className="mb-6">
          <TabsTrigger value="workout">
            <Dumbbell className="h-4 w-4 mr-2" />Treino
          </TabsTrigger>
          <TabsTrigger value="body">
            <TrendingUp className="h-4 w-4 mr-2" />Evolução
          </TabsTrigger>
          <TabsTrigger value="payments">
            <CreditCard className="h-4 w-4 mr-2" />Pagamentos
          </TabsTrigger>
          <TabsTrigger value="plans">
            <Activity className="h-4 w-4 mr-2" />Fichas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="workout">
          <TabWorkout
            activePlan={selectedPlan}
            allPlans={plans}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            onStartExecution={setExecutingDay}
            onSelectPlan={handleSelectPlan}
          />
        </TabsContent>

        <TabsContent value="body">
          <TabBody
            bodyRecords={bodyRecords}
            chartData={chartData}
            lastRecord={lastRecord}
            studentId={studentId}
            onSaved={fetchBodyRecords}
          />
        </TabsContent>

        <TabsContent value="payments">
          <TabPayments payments={payments} />
        </TabsContent>

        <TabsContent value="plans">
          <TabPlans plans={plans} />
        </TabsContent>
      </Tabs>

      {/* Dialog modo treino */}
      <Dialog open={!!executingDay} onOpenChange={(v) => { if (!v) setExecutingDay(null); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              {executingDay?.label}
            </DialogTitle>
          </DialogHeader>
          {executingDay && (
            <WorkoutExecutionMode
              day={executingDay}
              onClose={() => setExecutingDay(null)}
            />
          )}
        </DialogContent>
      </Dialog>

      <FloatingChat />
    </div>
  );
}