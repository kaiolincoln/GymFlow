import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Plus, Sparkles, BookOpen } from "lucide-react";
import { Exercise, Student, WorkoutTemplate } from "@/lib/types";
import { DayForm, DEFAULT_LABELS } from "./types";
import { DayBlock } from "./DayBlock";

interface WorkoutPlanFormProps {
  dialogOpen: boolean;
  setDialogOpen: (v: boolean) => void;
  students: Student[];
  exercises: Exercise[];
  templates: WorkoutTemplate[];
  selectedStudent: string;
  setSelectedStudent: (v: string) => void;
  form: { name: string; description: string };
  setForm: (f: { name: string; description: string }) => void;
  days: DayForm[];
  setDays: (d: DayForm[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  onApplyTemplate: (t: WorkoutTemplate) => void;
  onResetForm: () => void;
}

export function WorkoutPlanForm({
  dialogOpen,
  setDialogOpen,
  students,
  exercises,
  templates,
  selectedStudent,
  setSelectedStudent,
  form,
  setForm,
  days,
  setDays,
  onSubmit,
  onApplyTemplate,
  onResetForm,
}: WorkoutPlanFormProps) {
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

  return (
    <Dialog open={dialogOpen} onOpenChange={(v) => { setDialogOpen(v); if (!v) onResetForm(); }}>
      <DialogTrigger asChild>
        <Button variant="glow"><Plus className="h-4 w-4 mr-2" /> Nova Ficha</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader><DialogTitle>Criar Ficha de Treino</DialogTitle></DialogHeader>

        <form onSubmit={onSubmit} className="space-y-5">

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
                    onClick={() => onApplyTemplate(t)}
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
  );
}