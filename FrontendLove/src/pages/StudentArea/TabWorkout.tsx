import { WorkoutPlan, WorkoutDay } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dumbbell, Play } from "lucide-react";
import { motion } from "framer-motion";

interface TabWorkoutProps {
  activePlan: WorkoutPlan | null;
  allPlans: WorkoutPlan[];
  activeDay: number;
  setActiveDay: (i: number) => void;
  onStartExecution: (day: WorkoutDay) => void;
  onSelectPlan: (planId: string) => void;
}

export function TabWorkout({
  activePlan,
  allPlans,
  activeDay,
  setActiveDay,
  onStartExecution,
  onSelectPlan,
}: TabWorkoutProps) {
  if (!activePlan) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <Dumbbell className="h-16 w-16 text-muted-foreground/30" />
        <p className="font-display text-xl font-semibold text-muted-foreground">Nenhuma ficha ativa</p>
        <p className="text-sm text-muted-foreground">Fale com seu personal para ativar uma ficha de treino.</p>
      </div>
    );
  }

  const currentDay = activePlan.days?.[activeDay];

  return (
    <div>
      {/* Info da ficha */}
      <div className="glass-card p-5 mb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">Ficha Ativa</p>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="font-display text-2xl font-bold">{activePlan.name}</h2>
              {allPlans.length > 1 && (
                <Select value={activePlan.id} onValueChange={onSelectPlan}>
                  <SelectTrigger className="h-7 w-auto text-xs px-2 border-dashed">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {allPlans.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        <span className="flex items-center gap-2">
                          {p.name}
                          {p.active && (
                            <span className="text-xs text-primary">(ativa)</span>
                          )}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
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
                <Button variant="glow" size="sm" onClick={() => onStartExecution(currentDay)}>
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
  );
}