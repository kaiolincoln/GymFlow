import { CheckCircle2, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkoutDay } from "@/lib/types";
import { RestTimer } from "./RestTimer";
import { motion } from "framer-motion";
import { useState } from "react";

export function WorkoutExecutionMode({ day, onClose }: { day: WorkoutDay; onClose: () => void }) {
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