'use client'

import { useQuery } from '@tanstack/react-query'
import { Users, TrendingUp, AlertCircle, UserPlus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { dashboardService } from '@/services/dashboard.service'

export default function DashboardPage() {
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: dashboardService.getMetrics,
  })

  const cards = [
    { title: 'Alunos Ativos', value: metrics?.totalActive ?? 0, icon: Users, color: '#F97316' },
    { title: 'Inadimplentes', value: metrics?.totalOverdue ?? 0, icon: AlertCircle, color: '#EF4444' },
    { title: 'Novos este mês', value: metrics?.newStudentsThisMonth ?? 0, icon: UserPlus, color: '#22C55E' },
    {
      title: 'Receita do mês',
      value: metrics ? `R$ ${Number(metrics.revenueThisMonth).toFixed(2)}` : 'R$ 0,00',
      icon: TrendingUp,
      color: '#F97316',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="h-24" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <Icon size={20} style={{ color: card.color }} />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{card.value}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}