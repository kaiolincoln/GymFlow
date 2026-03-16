import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { WorkoutPlan, WorkoutTemplate, Student, Exercise, StudentsResponse } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus, Eye, Power, Trash2, GripVertical,
  ChevronDown, ChevronUp, BookmarkPlus, Sparkles, BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// ─── Tipos internos do formulário ───────────────────────────────────────────

interface ExerciseRow {
  exerciseId: string;
  sets: number;
  reps: string;
  load: string;
  rest: string;
  order: number;
}

interface DayForm {
  label: string;
  order: number;
  exercises: ExerciseRow[];
  collapsed: boolean;
}

const DEFAULT_LABELS = ["Treino A", "Treino B", "Treino C", "Treino D", "Treino E", "Treino F"];

// ─── Componente de um dia ────────────────────────────────────────────────────

function DayBlock({
  day,
  index,
  exercises,
  onUpdate,
  onRemove,
}: {
  day: DayForm;
  index: number;
  exercises: Exercise[];
  onUpdate: (updated: DayForm) => void;
  onRemove: () => void;
}) {
  const addExercise = () => {
    onUpdate({
      ...day,
      exercises: [
        ...day.exercises,
        { exerciseId: "", sets: 3, reps: "12", load: "", rest: "60s", order: day.exercises.length + 1 },
      ],
    });
  };

  const removeExercise = (i: number) => {
    onUpdate({ ...day, exercises: day.exercises.filter((_, idx) => idx !== i) });
  };

  const updateExercise = (i: number, field: keyof ExerciseRow, value: string | number) => {
    const copy = [...day.exercises];
    (copy[i] as any)[field] = value;
    onUpdate({ ...day, exercises: copy });
  };

  return (
    <div className="glass-card overflow-hidden">
      {/* Header do dia */}
      <div className="flex items-center gap-3 p-3 border-b border-border/50">
        <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <Input
          className="h-8 text-sm font-semibold w-32"
          value={day.label}
          onChange={(e) => onUpdate({ ...day, label: e.target.value })}
          placeholder="Treino A"
        />
        <span className="text-xs text-muted-foreground flex-1">
          {day.exercises.length} exercício{day.exercises.length !== 1 ? "s" : ""}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2"
          onClick={() => onUpdate({ ...day, collapsed: !day.collapsed })}
        >
          {day.collapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-destructive hover:text-destructive"
          onClick={onRemove}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* Exercícios do dia */}
      <AnimatePresence>
        {!day.collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-3 space-y-2">
              {day.exercises.map((ex, i) => (
                <div key={i} className="grid gap-2 grid-cols-2 sm:grid-cols-6 items-end bg-background/30 rounded-lg p-2">
                  <div className="col-span-2 space-y-1">
                    <Label className="text-xs text-muted-foreground">Exercício</Label>
                    <Select
                      value={ex.exerciseId}
                      onValueChange={(v) => updateExercise(i, "exerciseId", v)}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {exercises.map((e) => (
                          <SelectItem key={e.id} value={e.id}>
                            {e.name}
                            <span className="text-muted-foreground ml-1">· {e.muscleGroup}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Séries</Label>
                    <Input
                      className="h-8 text-xs"
                      type="number"
                      min={1}
                      value={ex.sets}
                      onChange={(e) => updateExercise(i, "sets", Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Reps</Label>
                    <Input
                      className="h-8 text-xs"
                      placeholder="12"
                      value={ex.reps}
                      onChange={(e) => updateExercise(i, "reps", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Carga</Label>
                    <Input
                      className="h-8 text-xs"
                      placeholder="20kg"
                      value={ex.load}
                      onChange={(e) => updateExercise(i, "load", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Descanso</Label>
                    <div className="flex gap-1">
                      <Input
                        className="h-8 text-xs"
                        placeholder="60s"
                        value={ex.rest}
                        onChange={(e) => updateExercise(i, "rest", e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 flex-shrink-0 text-destructive"
                        onClick={() => removeExercise(i)}
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {day.exercises.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-3">
                  Nenhum exercício. Clique em "+ Exercício" para adicionar.
                </p>
              )}

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full h-8 text-xs border-dashed"
                onClick={addExercise}
              >
                <Plus className="h-3 w-3 mr-1" /> Exercício
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Componente de detalhe de ficha ─────────────────────────────────────────

function WorkoutPlanDetail({ plan }: { plan: WorkoutPlan }) {
  const [activeDay, setActiveDay] = useState(0);

  if (!plan.days || plan.days.length === 0) {
    return <p className="text-sm text-muted-foreground">Ficha sem dias cadastrados.</p>;
  }

  const day = plan.days[activeDay];

  return (
    <div>
      {/* Tabs dos dias */}
      <div className="flex gap-2 flex-wrap mb-4">
        {plan.days.map((d, i) => (
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

      {/* Exercícios do dia selecionado */}
      <div className="space-y-3">
        {day.exercises.map((ex, i) => (
          <div key={ex.id} className="glass-card p-3 flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            {ex.exercise.gifUrl && (
              <img
                src={ex.exercise.gifUrl}
                alt={ex.exercise.name}
                className="h-12 w-12 rounded-lg object-cover hidden sm:block flex-shrink-0"
              />
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
        {day.exercises.length === 0 && (
          <p className="text-sm text-muted-foreground">Nenhum exercício neste dia.</p>
        )}
      </div>
    </div>
  );
}

// ─── Página principal ────────────────────────────────────────────────────────

export default function WorkoutPlans() {
  const [students, setStudents] = useState<Student[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [templates, setTemplates] = useState<WorkoutTemplate[]>([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [detailPlan, setDetailPlan] = useState<WorkoutPlan | null>(null);

  // Form
  const [form, setForm] = useState({ name: "", description: "" });
  const [days, setDays] = useState<DayForm[]>([
    { label: "Treino A", order: 0, exercises: [], collapsed: false },
  ]);

  useEffect(() => {
    // students pode retornar array ou objeto paginado
    api.get<StudentsResponse | Student[]>("/students")
      .then((data) => {
        if (Array.isArray(data)) setStudents(data);
        else setStudents((data as StudentsResponse).students ?? []);
      })
      .catch(() => {});

    api.get<Exercise[]>("/exercises")
      .then(setExercises)
      .catch(() => {});

    // Carrega templates do personal logado
    api.get<WorkoutTemplate[]>("/workout-templates")
      .then(setTemplates)
      .catch(() => {});
  }, []);

  const fetchPlans = (studentId: string) => {
    setLoading(true);
    api.get<WorkoutPlan[]>(`/students/${studentId}/workout-plans`)
      .then(setPlans)
      .catch(() => toast.error("Erro ao carregar fichas"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (selectedStudent) fetchPlans(selectedStudent);
    else setPlans([]);
  }, [selectedStudent]);

  const addDay = () => {
    const nextLabel = DEFAULT_LABELS[days.length] ?? `Treino ${String.fromCharCode(65 + days.length)}`;
    setDays([...days, { label: nextLabel, order: days.length, exercises: [], collapsed: false }]);
  };

  const removeDay = (index: number) => {
    setDays(days.filter((_, i) => i !== index));
  };

  const updateDay = (index: number, updated: DayForm) => {
    const copy = [...days];
    copy[index] = updated;
    setDays(copy);
  };

  const resetForm = () => {
    setForm({ name: "", description: "" });
    setDays([{ label: "Treino A", order: 0, exercises: [], collapsed: false }]);
  };

  // ─── Aplica template ao formulário ────────────────────────────────────────
  const applyTemplate = (t: WorkoutTemplate) => {
    setForm({ name: t.name, description: t.description ?? "" });
    setDays(
      t.days.map((d, i) => ({
        label: d.label,
        order: i,
        collapsed: false,
        exercises: d.exercises.map((ex) => ({
          exerciseId: ex.exerciseId,
          sets: ex.sets,
          reps: ex.reps,
          load: ex.load ?? "",
          rest: ex.rest ?? "",
          order: ex.order,
        })),
      }))
    );
    toast.success(`Template "${t.name}" aplicado!`);
  };

  // ─── Salva ficha existente como template ──────────────────────────────────
  const handleSaveAsTemplate = async (planId: string, planName: string) => {
    const name = prompt(`Nome do template (padrão: "${planName}"):`) ?? planName;
    try {
      const t = await api.post<WorkoutTemplate>(
        `/workout-templates/from-plan/${planId}`,
        { templateName: name }
      );
      setTemplates((prev) => [t, ...prev]);
      toast.success("Template salvo!");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) return toast.error("Selecione um aluno");
    if (days.length === 0) return toast.error("Adicione ao menos um dia de treino");

    try {
      await api.post(`/students/${selectedStudent}/workout-plans`, {
        ...form,
        days: days.map((d, i) => ({
          label: d.label,
          order: i,
          exercises: d.exercises
            .filter((ex) => ex.exerciseId)
            .map((ex, j) => ({ ...ex, order: j })),
        })),
      });
      toast.success("Ficha criada!");
      setDialogOpen(false);
      resetForm();
      fetchPlans(selectedStudent);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleActivate = async (planId: string) => {
    try {
      await api.patch(`/workout-plans/${planId}/activate`);
      toast.success("Ficha ativada!");
      fetchPlans(selectedStudent);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeletePlan = async (planId: string) => {
    if (!confirm("Excluir ficha?")) return;
    try {
      await api.delete(`/workout-plans/${planId}`);
      toast.success("Ficha excluída!");
      fetchPlans(selectedStudent);
      setDetailPlan(null);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const viewDetail = async (planId: string) => {
    try {
      const data = await api.get<WorkoutPlan>(`/workout-plans/${planId}`);
      setDetailPlan(data);
    } catch {
      toast.error("Erro ao carregar detalhes");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">Fichas de Treino</h1>
          {templates.length > 0 && (
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              {templates.length} template{templates.length !== 1 ? "s" : ""} salvo{templates.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        <Dialog open={dialogOpen} onOpenChange={(v) => { setDialogOpen(v); if (!v) resetForm(); }}>
          <DialogTrigger asChild>
            <Button variant="glow"><Plus className="h-4 w-4 mr-2" /> Nova Ficha</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Criar Ficha de Treino</DialogTitle></DialogHeader>

            <form onSubmit={handleCreate} className="space-y-5">

              {/* ── Templates disponíveis ─────────────────────────────── */}
              {templates.length > 0 && (
                <div className="space-y-2">
                  <Label className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Começar de um template
                    <span className="text-muted-foreground text-xs font-normal">(opcional)</span>
                  </Label>
                  <div className="grid gap-2 sm:grid-cols-2 max-h-44 overflow-y-auto pr-1">
                    {templates.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => applyTemplate(t)}
                        className="glass-card p-3 text-left hover:border-primary/50 transition-colors group"
                      >
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {t.name}
                        </p>
                        {t.description && (
                          <p className="text-xs text-muted-foreground truncate">{t.description}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {t.days.length} dia{t.days.length !== 1 ? "s" : ""} ·{" "}
                          {t.days.reduce((s, d) => s + d.exercises.length, 0)} exercícios
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-border/50 pt-2" />
                </div>
              )}

              {/* ── Info básica ───────────────────────────────────────── */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Aluno</Label>
                  <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                    <SelectTrigger><SelectValue placeholder="Selecione o aluno" /></SelectTrigger>
                    <SelectContent>
                      {students.map((s) => (
                        <SelectItem key={s.id} value={s.id}>{s.user.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Nome da Ficha</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ex: Hipertrofia - Intermediário"
                    required
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Descrição <span className="text-muted-foreground text-xs">(opcional)</span></Label>
                  <Input
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Ex: Foco em hipertrofia, 3x por semana"
                  />
                </div>
              </div>

              {/* ── Dias de treino ────────────────────────────────────── */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <Label>Dias de Treino</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Organize os exercícios por dia (Treino A, B, C...)
                    </p>
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={addDay}>
                    <Plus className="h-3 w-3 mr-1" /> Dia
                  </Button>
                </div>

                <div className="space-y-3">
                  {days.map((day, i) => (
                    <DayBlock
                      key={i}
                      day={day}
                      index={i}
                      exercises={exercises}
                      onUpdate={(updated) => updateDay(i, updated)}
                      onRemove={() => removeDay(i)}
                    />
                  ))}
                  {days.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-6 border border-dashed border-border rounded-lg">
                      Nenhum dia adicionado. Clique em "+ Dia" para começar.
                    </p>
                  )}
                </div>
              </div>

              <Button type="submit" variant="glow" className="w-full">Criar Ficha</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Student selector */}
      <div className="mb-6 max-w-xs">
        <Label className="mb-2 block">Selecionar Aluno</Label>
        <Select value={selectedStudent} onValueChange={setSelectedStudent}>
          <SelectTrigger><SelectValue placeholder="Selecione um aluno" /></SelectTrigger>
          <SelectContent>
            {students.map((s) => (
              <SelectItem key={s.id} value={s.id}>{s.user.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!selectedStudent ? (
        <p className="text-muted-foreground">Selecione um aluno para ver suas fichas.</p>
      ) : loading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card h-20 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {plans.length === 0 && (
            <p className="text-muted-foreground">Nenhuma ficha cadastrada para este aluno.</p>
          )}
          {plans.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-display font-semibold">{p.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  {p.description && (
                    <p className="text-xs text-muted-foreground">{p.description}</p>
                  )}
                  {p.days && p.days.length > 0 && (
                    <div className="flex gap-1">
                      {p.days.map((d) => (
                        <span key={d.id} className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                          {d.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={p.active ? "default" : "secondary"}>
                  {p.active ? "Ativa" : "Inativa"}
                </Badge>
                <Button size="sm" variant="ghost" onClick={() => viewDetail(p.id)}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  title="Salvar como template"
                  onClick={() => handleSaveAsTemplate(p.id, p.name)}
                >
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
                {!p.active && (
                  <Button size="sm" variant="ghost" onClick={() => handleActivate(p.id)}>
                    <Power className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDeletePlan(p.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Detail dialog */}
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
          {detailPlan && <WorkoutPlanDetail plan={detailPlan} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}