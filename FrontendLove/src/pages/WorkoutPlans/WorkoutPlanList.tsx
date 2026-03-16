import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, BookmarkPlus, Power, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { WorkoutPlan } from "@/lib/types";

interface WorkoutPlanListProps {
  plans: WorkoutPlan[];
  loading: boolean;
  onView: (planId: string) => void;
  onSaveAsTemplate: (planId: string, planName: string) => void;
  onActivate: (planId: string) => void;
  onDelete: (planId: string) => void;
}

export function WorkoutPlanList({
  plans,
  loading,
  onView,
  onSaveAsTemplate,
  onActivate,
  onDelete,
}: WorkoutPlanListProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="glass-card h-20 animate-pulse" />
        ))}
      </div>
    );
  }

  if (plans.length === 0) {
    return <p className="text-muted-foreground">Nenhuma ficha cadastrada para este aluno.</p>;
  }

  return (
    <div className="space-y-3">
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
            <Button size="sm" variant="ghost" onClick={() => onView(p.id)}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              title="Salvar como template"
              onClick={() => onSaveAsTemplate(p.id, p.name)}
            >
              <BookmarkPlus className="h-4 w-4" />
            </Button>
            {!p.active && (
              <Button size="sm" variant="ghost" onClick={() => onActivate(p.id)}>
                <Power className="h-4 w-4" />
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="text-destructive hover:text-destructive"
              onClick={() => onDelete(p.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}