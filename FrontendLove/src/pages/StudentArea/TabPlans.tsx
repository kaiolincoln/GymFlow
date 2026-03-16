import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";
import { motion } from "framer-motion";
import { WorkoutPlan } from "@/lib/types";

export function TabPlans({ plans }: { plans: WorkoutPlan[] }) {
  if (plans.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
        <Activity className="h-12 w-12 text-muted-foreground/30" />
        <p className="text-muted-foreground">Nenhuma ficha cadastrada.</p>
      </div>
    );
  }

  return (
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
  );
}