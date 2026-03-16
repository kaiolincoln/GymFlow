import { useState } from "react";
import { WorkoutPlan } from "@/lib/types";

export function WorkoutPlanDetail({ plan }: { plan: WorkoutPlan }) {
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