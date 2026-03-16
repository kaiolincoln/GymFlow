import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { DashboardMetrics } from "@/lib/types";
import { Users, DollarSign, AlertTriangle, UserPlus, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Tooltip customizado para receita
const RevenueTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-sm">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        <p className="text-success">
          R$ {Number(payload[0].value).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>
    );
  }
  return null;
};

// Tooltip customizado para alunos
const StudentsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 text-sm">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        <p className="text-primary">{payload[0].value} novos alunos</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<DashboardMetrics>("/dashboard/metrics")
      .then(setMetrics)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const revenueChange = metrics
    ? metrics.revenueLastMonth > 0
      ? ((metrics.revenueThisMonth - metrics.revenueLastMonth) / metrics.revenueLastMonth) * 100
      : null
    : null;

  const cards = metrics
    ? [
        {
          label: "Alunos Ativos",
          value: metrics.totalActive,
          icon: Users,
          color: "text-info",
          bg: "bg-info/10",
        },
        {
          label: "Receita do Mês",
          value: `R$ ${Number(metrics.revenueThisMonth).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
          icon: DollarSign,
          color: "text-success",
          bg: "bg-success/10",
          sub: revenueChange !== null ? (
            <span className={`flex items-center gap-1 text-xs mt-1 ${revenueChange >= 0 ? "text-success" : "text-destructive"}`}>
              {revenueChange >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(revenueChange).toFixed(1)}% vs mês anterior
            </span>
          ) : null,
        },
        {
          label: "Inadimplentes",
          value: metrics.totalOverdue,
          icon: AlertTriangle,
          color: "text-warning",
          bg: "bg-warning/10",
        },
        {
          label: "Novos este Mês",
          value: metrics.newStudentsThisMonth,
          icon: UserPlus,
          color: "text-primary",
          bg: "bg-primary/10",
        },
      ]
    : [];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Dashboard</h1>

      {loading ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card h-32 animate-pulse" />
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card h-72 animate-pulse" />
            <div className="glass-card h-72 animate-pulse" />
          </div>
        </>
      ) : (
        <>
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
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
                  <div className={`rounded-lg p-2 ${card.bg}`}>
                    <card.icon className={`h-4 w-4 ${card.color}`} />
                  </div>
                </div>
                <p className="font-display text-3xl font-bold">{card.value}</p>
                {"sub" in card && card.sub}
              </motion.div>
            ))}
          </div>

          {/* Gráficos */}
          {metrics?.monthlyData && metrics.monthlyData.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Receita mensal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6"
              >
                <h2 className="font-display font-semibold text-lg mb-1">Receita Mensal</h2>
                <p className="text-xs text-muted-foreground mb-6">Últimos 6 meses</p>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={metrics.monthlyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`}
                      width={45}
                    />
                    <Tooltip content={<RevenueTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--success))"
                      strokeWidth={2}
                      fill="url(#revenueGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Novos alunos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card p-6"
              >
                <h2 className="font-display font-semibold text-lg mb-1">Novos Alunos</h2>
                <p className="text-xs text-muted-foreground mb-6">Últimos 6 meses</p>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={metrics.monthlyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      axisLine={false}
                      tickLine={false}
                      allowDecimals={false}
                      width={30}
                    />
                    <Tooltip content={<StudentsTooltip />} />
                    <Bar
                      dataKey="newStudents"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={48}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
}