import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { DashboardMetrics } from "@/lib/types";
import { Users, DollarSign, AlertTriangle, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<DashboardMetrics>("/dashboard/metrics")
      .then(setMetrics)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cards = metrics
    ? [
        {
          label: "Alunos Ativos",
          value: metrics.totalActive,
          icon: Users,
          color: "text-info",
        },
        {
          label: "Receita do Mês",
          value: `R$ ${Number(metrics.revenueThisMonth).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
          icon: DollarSign,
          color: "text-success",
        },
        {
          label: "Inadimplentes",
          value: metrics.totalOverdue,
          icon: AlertTriangle,
          color: "text-warning",
        },
        {
          label: "Novos este Mês",
          value: metrics.newStudentsThisMonth,
          icon: UserPlus,
          color: "text-primary",
        },
      ]
    : [];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Dashboard</h1>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass-card h-32 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">{card.label}</span>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <p className="font-display text-3xl font-bold">{card.value}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}