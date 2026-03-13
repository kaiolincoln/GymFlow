import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { WorkoutPlan, Student, Exercise, StudentsResponse } from "@/lib/types";
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
import { Plus, Eye, Power, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function WorkoutPlans() {
  const [students, setStudents] = useState<Student[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [detailPlan, setDetailPlan] = useState<WorkoutPlan | null>(null);
  const [form, setForm] = useState({ name: "", description: "" });
  const [planExercises, setPlanExercises] = useState<Array<{
    exerciseId: string;
    sets: number;
    reps: string;
    load: string;
    rest: string;
    order: number;
  }>>([]);

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

  const addExerciseRow = () => {
    setPlanExercises([...planExercises, {
      exerciseId: "",
      sets: 3,
      reps: "12",
      load: "",
      rest: "60s",
      order: planExercises.length + 1,
    }]);
  };

  const removeExerciseRow = (index: number) => {
    setPlanExercises(planExercises.filter((_, i) => i !== index));
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) return toast.error("Selecione um aluno");
    try {
      await api.post(`/students/${selectedStudent}/workout-plans`, {
        ...form,
        exercises: planExercises.filter((ex) => ex.exerciseId),
      });
      toast.success("Ficha criada!");
      setDialogOpen(false);
      setForm({ name: "", description: "" });
      setPlanExercises([]);
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
        <h1 className="font-display text-3xl font-bold">Fichas de Treino</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="glow"><Plus className="h-4 w-4 mr-2" /> Nova Ficha</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Criar Ficha de Treino</DialogTitle></DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4">
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
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Descrição</Label>
                  <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label>Exercícios</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addExerciseRow}>
                    <Plus className="h-3 w-3 mr-1" /> Adicionar
                  </Button>
                </div>
                <div className="space-y-3">
                  {planExercises.map((ex, i) => (
                    <div key={i} className="glass-card p-3 grid gap-2 grid-cols-2 sm:grid-cols-6 items-end">
                      <div className="col-span-2 space-y-1">
                        <Label className="text-xs">Exercício</Label>
                        <Select value={ex.exerciseId} onValueChange={(v) => {
                          const copy = [...planExercises];
                          copy[i].exerciseId = v;
                          setPlanExercises(copy);
                        }}>
                          <SelectTrigger><SelectValue placeholder="Selecionar" /></SelectTrigger>
                          <SelectContent>
                            {exercises.map((e) => (
                              <SelectItem key={e.id} value={e.id}>{e.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Séries</Label>
                        <Input
                          type="number"
                          placeholder="3"
                          value={ex.sets}
                          onChange={(e) => {
                            const copy = [...planExercises];
                            copy[i].sets = Number(e.target.value);
                            setPlanExercises(copy);
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Reps</Label>
                        <Input
                          placeholder="12"
                          value={ex.reps}
                          onChange={(e) => {
                            const copy = [...planExercises];
                            copy[i].reps = e.target.value;
                            setPlanExercises(copy);
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Carga</Label>
                        <Input
                          placeholder="20kg"
                          value={ex.load}
                          onChange={(e) => {
                            const copy = [...planExercises];
                            copy[i].load = e.target.value;
                            setPlanExercises(copy);
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Descanso</Label>
                        <div className="flex gap-1">
                          <Input
                            placeholder="60s"
                            value={ex.rest}
                            onChange={(e) => {
                              const copy = [...planExercises];
                              copy[i].rest = e.target.value;
                              setPlanExercises(copy);
                            }}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="flex-shrink-0 text-destructive"
                            onClick={() => removeExerciseRow(i)}
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {planExercises.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Nenhum exercício adicionado. Clique em "Adicionar" para começar.
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
                {p.description && (
                  <p className="text-xs text-muted-foreground">{p.description}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={p.active ? "default" : "secondary"}>
                  {p.active ? "Ativa" : "Inativa"}
                </Badge>
                <Button size="sm" variant="ghost" onClick={() => viewDetail(p.id)}>
                  <Eye className="h-4 w-4" />
                </Button>
                {!p.active && (
                  <Button size="sm" variant="ghost" onClick={() => handleActivate(p.id)}>
                    <Power className="h-4 w-4" />
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={() => handleDeletePlan(p.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Detail dialog */}
      <Dialog open={!!detailPlan} onOpenChange={(v) => { if (!v) setDetailPlan(null); }}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader><DialogTitle>{detailPlan?.name}</DialogTitle></DialogHeader>
          {detailPlan?.description && (
            <p className="text-sm text-muted-foreground">{detailPlan.description}</p>
          )}
          <div className="space-y-3 mt-4">
            {detailPlan?.exercises?.map((ex, i) => (
              <div key={ex.id} className="glass-card p-3 flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
                  {i + 1}
                </span>
                {ex.exercise.gifUrl && (
                  <img
                    src={ex.exercise.gifUrl}
                    alt={ex.exercise.name}
                    className="h-12 w-12 rounded-lg object-cover hidden sm:block"
                  />
                )}
                <div className="flex-1">
                  <p className="font-medium">{ex.exercise.name}</p>
                  <p className="text-xs text-muted-foreground">{ex.exercise.muscleGroup}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold">{ex.sets}x{ex.reps}</p>
                  {ex.load && <p className="text-xs text-muted-foreground">{ex.load}</p>}
                  {ex.rest && <p className="text-xs text-muted-foreground">Desc: {ex.rest}</p>}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}