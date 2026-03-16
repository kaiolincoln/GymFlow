import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WorkoutPlan } from "@/lib/types";
import { Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

interface TabWorkoutsProps {
  workoutPlans: WorkoutPlan[] | undefined;
  onView: (planId: string) => void;
}

export function TabWorkouts({ workoutPlans, onView }: TabWorkoutsProps) {
  return (
    <div className="space-y-3">
      {workoutPlans?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
          <Dumbbell className="h-12 w-12 text-muted-foreground/30" />
          <p className="text-muted-foreground text-sm">Nenhuma ficha cadastrada.</p>
          <p className="text-xs text-muted-foreground">Crie uma ficha na página de Fichas de Treino.</p>
        </div>
      )}
      {workoutPlans?.map((wp, i) => (
        <motion.div
          key={wp.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className="glass-card p-4 flex items-center justify-between"
        >
          <div>
            <p className="font-display font-semibold">{wp.name}</p>
            {wp.description && (
              <p className="text-xs text-muted-foreground">{wp.description}</p>
            )}
            {wp.days && wp.days.length > 0 && (
              <div className="flex gap-1 mt-1.5">
                {wp.days.map((d) => (
                  <span key={d.id} className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                    {d.label}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={wp.active ? "default" : "secondary"}>
              {wp.active ? "Ativa" : "Inativa"}
            </Badge>
            <Button size="sm" variant="ghost" onClick={() => onView(wp.id)}>
              Ver
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}