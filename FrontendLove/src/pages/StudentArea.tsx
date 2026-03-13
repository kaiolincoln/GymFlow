import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";
import { WorkoutPlan, Payment, BodyRecord } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, CreditCard, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentArea() {
  const { user } = useAuth();
  const studentId = user?.studentId;
  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [activePlan, setActivePlan] = useState<WorkoutPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;
    Promise.all([
      api.get<WorkoutPlan[]>(`/students/${studentId}/workout-plans`),
      api.get<Payment[]>(`/students/${studentId}/payments`),
    ])
      .then(([wp, pay]) => {
        setPlans(wp);
        setPayments(pay);
        const active = wp.find((p) => p.active);
        if (active) {
          api.get<WorkoutPlan>(`/workout-plans/${active.id}`).then(setActivePlan);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [studentId]);

  if (!studentId) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Você não está vinculado como aluno.</p>
      </div>
    );
  }

  if (loading) return <div className="flex items-center justify-center h-64"><div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Minha Área</h1>
      <p className="text-muted-foreground mb-8">Olá, {user?.name}! Confira seus treinos e pagamentos.</p>

      <Tabs defaultValue="workout">
        <TabsList className="mb-6">
          <TabsTrigger value="workout"><Dumbbell className="h-4 w-4 mr-2" />Treino Ativo</TabsTrigger>
          <TabsTrigger value="plans"><Activity className="h-4 w-4 mr-2" />Todas as Fichas</TabsTrigger>
          <TabsTrigger value="payments"><CreditCard className="h-4 w-4 mr-2" />Pagamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="workout">
          {activePlan ? (
            <div>
              <div className="glass-card p-6 mb-6">
                <h2 className="font-display text-2xl font-bold text-primary">{activePlan.name}</h2>
                {activePlan.description && <p className="text-muted-foreground mt-1">{activePlan.description}</p>}
              </div>
              <div className="space-y-3">
                {activePlan.exercises?.map((ex, i) => (
                  <motion.div
                    key={ex.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground font-bold">{i + 1}</span>
                    <div className="flex-1">
                      <p className="font-display font-semibold">{ex.exercise.name}</p>
                      <p className="text-xs text-muted-foreground">{ex.exercise.muscleGroup}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{ex.sets}x{ex.reps}</p>
                      {ex.load && <p className="text-xs text-muted-foreground">{ex.load}</p>}
                      {ex.rest && <p className="text-xs text-muted-foreground">Descanso: {ex.rest}</p>}
                    </div>
                    {ex.exercise.gifUrl && (
                      <img src={ex.exercise.gifUrl} alt={ex.exercise.name} className="h-16 w-16 rounded-lg object-cover hidden sm:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">Nenhuma ficha ativa no momento.</p>
          )}
        </TabsContent>

        <TabsContent value="plans">
          <div className="space-y-3">
            {plans.map((p) => (
              <div key={p.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold">{p.name}</p>
                  {p.description && <p className="text-xs text-muted-foreground">{p.description}</p>}
                </div>
                <Badge variant={p.active ? "default" : "secondary"}>{p.active ? "Ativa" : "Inativa"}</Badge>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <div className="space-y-3">
            {payments.length === 0 && <p className="text-muted-foreground">Nenhum pagamento registrado.</p>}
            {payments.map((p) => (
              <div key={p.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">R$ {Number(p.amount).toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">Vencimento: {new Date(p.dueDate).toLocaleDateString("pt-BR")}</p>
                </div>
                <Badge variant={p.status === "PAID" ? "default" : p.status === "OVERDUE" ? "destructive" : "secondary"}>
                  {p.status === "PAID" ? "Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
                </Badge>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
