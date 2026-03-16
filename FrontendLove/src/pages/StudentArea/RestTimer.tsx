import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export function RestTimer({ seconds, onDone }: { seconds: number; onDone: () => void }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) { onDone(); return; }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining]);

  const pct = (remaining / seconds) * 100;
  const r = 36;
  const circ = 2 * Math.PI * r;

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="100" height="100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
        <circle
          cx="50" cy="50" r={r} fill="none"
          stroke="hsl(var(--primary))" strokeWidth="6"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct / 100)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      <span className="text-4xl font-bold font-display -mt-16 mb-8">{remaining}s</span>
      <Button variant="outline" size="sm" onClick={onDone}>
        <RotateCcw className="h-3 w-3 mr-1" /> Pular
      </Button>
    </div>
  );
}