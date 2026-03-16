import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { WorkoutPlan } from "@/lib/types";

interface WorkoutPlanDetailDialogProps {
  detailPlan: WorkoutPlan | null;
  activeDay: number;
  setActiveDay: (i: number) => void;
  onClose: () => void;
}

export function WorkoutPlanDetailDialog({
  detailPlan,
  activeDay,
  setActiveDay,
  onClose,
}: WorkoutPlanDetailDialogProps) {
  return (
    <Dialog open={!!detailPlan} onOpenChange={(v) => { if (!v) onClose(); }}>
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
        {detailPlan?.days && detailPlan.days.length > 0 && (
          <div>
            <div className="flex gap-2 flex-wrap mb-4">
              {detailPlan.days.map((d, i) => (
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
            <div className="space-y-3">
              {detailPlan.days[activeDay]?.exercises.map((ex, i) => (
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
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}