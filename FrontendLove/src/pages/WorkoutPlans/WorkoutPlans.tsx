import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WorkoutPlan, WorkoutTemplate, Student, Exercise, StudentsResponse } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WorkoutPlanDetail } from "./WorkoutPlanDetail";
import { WorkoutPlanForm } from "./WorkoutPlanForm";
import { WorkoutPlanList } from "./WorkoutPlanList";
import { DayForm, DEFAULT_LABELS } from "./types";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

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
    api.get<StudentsResponse | Student[]>("/students")
      .then((data) => {
        if (Array.isArray(data)) setStudents(data);
        else setStudents((data as StudentsResponse).students ?? []);
      })
      .catch(() => {});

    api.get<Exercise[]>("/exercises")
      .then(setExercises)
      .catch(() => {});

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

  const resetForm = () => {
    setForm({ name: "", description: "" });
    setDays([{ label: "Treino A", order: 0, exercises: [], collapsed: false }]);
  };

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

        <WorkoutPlanForm
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          students={students}
          exercises={exercises}
          templates={templates}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
          form={form}
          setForm={setForm}
          days={days}
          setDays={setDays}
          onSubmit={handleCreate}
          onApplyTemplate={applyTemplate}
          onResetForm={resetForm}
        />
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
      ) : (
        <WorkoutPlanList
          plans={plans}
          loading={loading}
          onView={viewDetail}
          onSaveAsTemplate={handleSaveAsTemplate}
          onActivate={handleActivate}
          onDelete={handleDeletePlan}
        />
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