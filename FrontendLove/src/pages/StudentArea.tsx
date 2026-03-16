import { Dumbbell, CreditCard, Activity, TrendingUp, Play, RotateCcw, Plus, CheckCircle2, Timer } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, } from "recharts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutPlan, WorkoutDay, Payment, BodyRecord } from "@/lib/types";
import { FloatingChat } from "@/components/Chat/FloatingChat";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { toast } from "sonner";


function RestTimer({ seconds, onDone }: { seconds: number; onDone: () => void }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) { onDone(); return; }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining]);

  const pct = (remaining / seconds) * 100;
  const r = 36;
  const circ = 2 * Math.PI * r;

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="100" height="100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
        <circle
          cx="50" cy="50" r={r} fill="none"
          stroke="hsl(var(--primary))" strokeWidth="6"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct / 100)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      <span className="text-4xl font-bold font-display -mt-16 mb-8">{remaining}s</span>
      <Button variant="outline" size="sm" onClick={onDone}>
        <RotateCcw className="h-3 w-3 mr-1" /> Pular
      </Button>
    </div>
  );
}


function WorkoutExecutionMode({ day, onClose }: { day: WorkoutDay; onClose: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [completedSets, setCompletedSets] = useState<Record<string, number>>({});
  const [resting, setResting] = useState(false);
  const [done, setDone] = useState(false);

  const ex = day.exercises[currentIdx];
  const totalExercises = day.exercises.length;
  const completed = completedSets[ex?.id] ?? 0;

  const markSet = () => {
    const newCompleted = completed + 1;
    setCompletedSets((prev) => ({ ...prev, [ex.id]: newCompleted }));

    if (newCompleted < ex.sets) {
      const restSecs = ex.rest ? parseInt(ex.rest) || 60 : 60;
      setResting(true);
      setTimeout(() => setResting(false), restSecs * 1000 + 100);
    } else {
      if (currentIdx + 1 < totalExercises) {
        setTimeout(() => {
          setCurrentIdx((i) => i + 1);
          setResting(false);
        }, 500);
      } else {
        setDone(true);
      }
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
          <CheckCircle2 className="h-24 w-24 text-success" />
        </motion.div>
        <h2 className="font-display text-3xl font-bold">Treino concluído! 💪</h2>
        <p className="text-muted-foreground">Excelente trabalho hoje!</p>
        <Button variant="glow" onClick={onClose}>Fechar</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progresso */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Exercício {currentIdx + 1} de {totalExercises}</span>
        <span>{Math.round(((currentIdx) / totalExercises) * 100)}% concluído</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${(currentIdx / totalExercises) * 100}%` }}
        />
      </div>

      {/* Exercício atual */}
      <div className="glass-card p-6 text-center">
        {ex.exercise.gifUrl && (
          <img
            src={ex.exercise.gifUrl}
            alt={ex.exercise.name}
            className="h-32 w-32 rounded-xl object-cover mx-auto mb-4"
          />
        )}
        <h3 className="font-display text-2xl font-bold">{ex.exercise.name}</h3>
        <p className="text-muted-foreground text-sm mt-1">{ex.exercise.muscleGroup}</p>

        <div className="flex justify-center gap-6 mt-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">{ex.sets}</p>
            <p className="text-xs text-muted-foreground">séries</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">{ex.reps}</p>
            <p className="text-xs text-muted-foreground">reps</p>
          </div>
          {ex.load && (
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{ex.load}</p>
              <p className="text-xs text-muted-foreground">carga</p>
            </div>
          )}
        </div>
      </div>

      {/* Séries */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: ex.sets }).map((_, i) => (
          <div
            key={i}
            className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
              i < completed
                ? "bg-success border-success text-success-foreground"
                : "border-muted text-muted-foreground"
            }`}
          >
            {i < completed ? "✓" : i + 1}
          </div>
        ))}
      </div>

      {/* Timer ou botão */}
      <div className="flex justify-center">
        {resting ? (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1 justify-center">
              <Timer className="h-4 w-4" /> Descansando...
            </p>
            <RestTimer
              seconds={ex.rest ? parseInt(ex.rest) || 60 : 60}
              onDone={() => setResting(false)}
            />
          </div>
        ) : (
          <Button variant="glow" size="lg" onClick={markSet} disabled={completed >= ex.sets}>
            {completed >= ex.sets ? "✓ Concluído" : `Marcar Série ${completed + 1}/${ex.sets}`}
          </Button>
        )}
      </div>

      <Button variant="ghost" size="sm" className="w-full" onClick={onClose}>
        Sair do modo treino
      </Button>
    </div>
  );
}

// ─── Formulário de medidas corporais ────────────────────────────────────────

function BodyRecordForm({ studentId, onSaved }: { studentId: string; onSaved: () => void }) {
  const [form, setForm] = useState({ weight: "", height: "", bodyFat: "", notes: "" });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.post(`/students/${studentId}/body-records`, {
        weight: form.weight ? Number(form.weight) : undefined,
        height: form.height ? Number(form.height) : undefined,
        bodyFat: form.bodyFat ? Number(form.bodyFat) : undefined,
        notes: form.notes || undefined,
      });
      toast.success("Medidas registradas!");
      setForm({ weight: "", height: "", bodyFat: "", notes: "" });
      onSaved();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="glass-card p-5 space-y-4">
      <h3 className="font-display font-semibold flex items-center gap-2">
        <Plus className="h-4 w-4 text-primary" /> Registrar Medidas
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">Peso (kg)</Label>
          <Input
            type="number"
            placeholder="75.5"
            value={form.weight}
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Altura (m)</Label>
          <Input
            type="number"
            placeholder="1.78"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">% Gordura</Label>
          <Input
            type="number"
            placeholder="18.5"
            value={form.bodyFat}
            onChange={(e) => setForm({ ...form, bodyFat: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Observações</Label>
          <Input
            placeholder="Opcional"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>
      </div>
      <Button variant="glow" size="sm" onClick={handleSave} disabled={saving}>
        {saving ? "Salvando..." : "Salvar Medidas"}
      </Button>
    </div>
  );
}

// ─── Tooltip customizado do gráfico ─────────────────────────────────────────

const BodyTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-xs space-y-1">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name === "weight" ? "Peso" : p.name === "bodyFat" ? "% Gordura" : p.name}: {p.value}
            {p.name === "weight" ? "kg" : p.name === "bodyFat" ? "%" : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ─── Página principal ────────────────────────────────────────────────────────

export default function StudentArea() {
  const { user } = useAuth();
  const studentId = user?.studentId;

  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [bodyRecords, setBodyRecords] = useState<BodyRecord[]>([]);
  const [activePlan, setActivePlan] = useState<WorkoutPlan | null>(null);
  const [loading, setLoading] = useState(true);

  // Treino ativo
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  // Dados do gráfico corporal
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

  const currentDay = activePlan?.days?.[activeDay];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-1">Minha Área</h1>
        <p className="text-muted-foreground">Olá, <span className="text-foreground font-medium">{user?.name}</span>! Bora treinar? 💪</p>
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

        {/* ── ABA TREINO ── */}
        <TabsContent value="workout">
          {!activePlan ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <Dumbbell className="h-16 w-16 text-muted-foreground/30" />
              <p className="font-display text-xl font-semibold text-muted-foreground">Nenhuma ficha ativa</p>
              <p className="text-sm text-muted-foreground">Fale com seu personal para ativar uma ficha de treino.</p>
            </div>
          ) : (
            <div>
              {/* Info da ficha */}
              <div className="glass-card p-5 mb-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">Ficha Ativa</p>
                    <h2 className="font-display text-2xl font-bold">{activePlan.name}</h2>
                    {activePlan.description && (
                      <p className="text-muted-foreground text-sm mt-1">{activePlan.description}</p>
                    )}
                  </div>
                  <Badge variant="default" className="flex-shrink-0">Ativa</Badge>
                </div>
              </div>

              {/* Tabs dos dias */}
              {activePlan.days && activePlan.days.length > 0 && (
                <>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {activePlan.days.map((day, i) => (
                      <button
                        key={day.id}
                        onClick={() => setActiveDay(i)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeDay === i
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>

                  {/* Exercícios do dia */}
                  {currentDay && (
                    <>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-muted-foreground">
                          {currentDay.exercises.length} exercício{currentDay.exercises.length !== 1 ? "s" : ""}
                        </p>
                        <Button
                          variant="glow"
                          size="sm"
                          onClick={() => setExecutingDay(currentDay)}
                        >
                          <Play className="h-3.5 w-3.5 mr-1.5" /> Iniciar Treino
                        </Button>
                      </div>

                      <div className="space-y-3">
                        {currentDay.exercises.map((ex, i) => (
                          <motion.div
                            key={ex.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="glass-card p-4 flex items-center gap-4"
                          >
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm flex-shrink-0">
                              {i + 1}
                            </span>
                            {ex.exercise.gifUrl && (
                              <img
                                src={ex.exercise.gifUrl}
                                alt={ex.exercise.name}
                                className="h-14 w-14 rounded-lg object-cover hidden sm:block flex-shrink-0"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-display font-semibold truncate">{ex.exercise.name}</p>
                              <p className="text-xs text-muted-foreground">{ex.exercise.muscleGroup}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="font-bold">{ex.sets}×{ex.reps}</p>
                              {ex.load && <p className="text-xs text-muted-foreground">{ex.load}</p>}
                              {ex.rest && <p className="text-xs text-muted-foreground">⏱ {ex.rest}</p>}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </TabsContent>

        {/* ── ABA EVOLUÇÃO ── */}
        <TabsContent value="body">
          <div className="space-y-6">
            {/* Cards de última medida */}
            {lastRecord && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {lastRecord.weight && (
                  <div className="glass-card p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Peso atual</p>
                    <p className="font-display text-2xl font-bold">{Number(lastRecord.weight).toFixed(1)}<span className="text-sm text-muted-foreground ml-1">kg</span></p>
                  </div>
                )}
                {lastRecord.height && (
                  <div className="glass-card p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Altura</p>
                    <p className="font-display text-2xl font-bold">{Number(lastRecord.height).toFixed(2)}<span className="text-sm text-muted-foreground ml-1">m</span></p>
                  </div>
                )}
                {lastRecord.bodyFat && (
                  <div className="glass-card p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">% Gordura</p>
                    <p className="font-display text-2xl font-bold">{Number(lastRecord.bodyFat).toFixed(1)}<span className="text-sm text-muted-foreground ml-1">%</span></p>
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
            ) : chartData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground/30" />
                <p className="font-display font-semibold text-muted-foreground">Nenhuma medida registrada</p>
                <p className="text-sm text-muted-foreground">Registre suas medidas abaixo para ver a evolução.</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">Registre mais medidas para ver o gráfico de evolução.</p>
            )}

            {/* Formulário */}
            <BodyRecordForm studentId={studentId} onSaved={fetchBodyRecords} />
          </div>
        </TabsContent>

        {/* ── ABA PAGAMENTOS ── */}
        <TabsContent value="payments">
          {payments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
              <CreditCard className="h-12 w-12 text-muted-foreground/30" />
              <p className="text-muted-foreground">Nenhum pagamento registrado.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {payments
                .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
                .map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="glass-card p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold">R$ {Number(p.amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                      <p className="text-xs text-muted-foreground">
                        Venc.: {new Date(p.dueDate).toLocaleDateString("pt-BR")}
                        {p.paidAt && ` · Pago em ${new Date(p.paidAt).toLocaleDateString("pt-BR")}`}
                      </p>
                    </div>
                    <Badge
                      variant={
                        p.status === "PAID" ? "default" :
                        p.status === "OVERDUE" ? "destructive" : "secondary"
                      }
                    >
                      {p.status === "PAID" ? "✓ Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
                    </Badge>
                  </motion.div>
                ))}
            </div>
          )}
        </TabsContent>

        {/* ── ABA TODAS FICHAS ── */}
        <TabsContent value="plans">
          {plans.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
              <Activity className="h-12 w-12 text-muted-foreground/30" />
              <p className="text-muted-foreground">Nenhuma ficha cadastrada.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {plans.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="glass-card p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-display font-semibold">{p.name}</p>
                    {p.description && <p className="text-xs text-muted-foreground">{p.description}</p>}
                    {p.days && p.days.length > 0 && (
                      <div className="flex gap-1 mt-1.5">
                        {p.days.map((d) => (
                          <span key={d.id} className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                            {d.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <Badge variant={p.active ? "default" : "secondary"}>
                    {p.active ? "Ativa" : "Inativa"}
                  </Badge>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* ── Dialog modo treino ── */}
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
      <FloatingChat/>
    </div>
  
);
}