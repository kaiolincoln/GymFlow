import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Exercise } from "@/lib/types";
import { DayForm, ExerciseRow } from "./types";

export function DayBlock({
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