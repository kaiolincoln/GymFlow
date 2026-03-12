'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'
import { workoutPlansService } from '@/services/workoutPlans.service'
import { paymentsService } from '@/services/payments.service'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dumbbell, DollarSign, LogOut, CheckCircle } from 'lucide-react'

const paymentStatusLabel: Record<string, { label: string; color: string }> = {
  PAID:    { label: 'Pago',     color: '#22C55E' },
  PENDING: { label: 'Pendente', color: '#EAB308' },
  OVERDUE: { label: 'Vencido',  color: '#EF4444' },
}

export default function MinhaAreaPage() {
  const { user, signOut, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) router.push('/login')
    if (!isLoading && user && user.role !== 'STUDENT') router.push('/dashboard')
  }, [user, isLoading, router])

  const studentId = user?.studentId

  const { data: workoutPlans } = useQuery({
    queryKey: ['my-workout-plans', studentId],
    queryFn: () => workoutPlansService.listByStudent(studentId!),
    enabled: !!studentId,
  })

  const { data: payments } = useQuery({
    queryKey: ['my-payments', studentId],
    queryFn: () => paymentsService.listByStudent(studentId!),
    enabled: !!studentId,
  })

  const activePlan = workoutPlans?.find((p: any) => p.active)

  if (isLoading || !user) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F97316' }}>
            <Dumbbell size={20} color="white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">GymFlow</h1>
            <p className="text-xs text-muted-foreground">Minha Área</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">Aluno</p>
          </div>
          <button
            onClick={signOut}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-destructive"
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-6 pt-6">
        {/* Boas vindas */}
        <div
          className="rounded-2xl p-6 text-white"
          style={{ background: 'linear-gradient(135deg, #F97316, #ea580c)' }}
        >
          <p className="text-orange-100 text-sm">Bem-vindo de volta 👋</p>
          <h2 className="text-2xl font-bold mt-1">{user.name}</h2>
          {activePlan && (
            <p className="text-orange-100 text-sm mt-2">
              Ficha ativa: <span className="text-white font-medium">{activePlan.name}</span>
            </p>
          )}
        </div>

        {/* Fichas de Treino */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Dumbbell size={18} style={{ color: '#F97316' }} />
            <h2 className="font-semibold text-lg">Minhas Fichas</h2>
          </div>

          <div className="space-y-3">
            {workoutPlans?.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground text-sm">
                  Nenhuma ficha cadastrada ainda.
                </CardContent>
              </Card>
            )}
            {workoutPlans?.map((plan: any) => (
              <Card key={plan.id} className={plan.active ? 'border-orange-400' : ''}>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  {plan.active && (
                    <Badge style={{ backgroundColor: '#F97316', color: 'white' }}>Ativa</Badge>
                  )}
                </CardHeader>
                {plan.description && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardContent>
                )}
                {plan.exercises?.length > 0 && (
                  <CardContent className="pt-0 space-y-1">
                    {plan.exercises.map((ex: any) => (
                      <div key={ex.id} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={13} style={{ color: '#F97316' }} />
                        <span className="font-medium">{ex.exercise.name}</span>
                        <span className="text-muted-foreground">
                          {ex.sets}x{ex.reps} {ex.load && `— ${ex.load}`}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Pagamentos */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <DollarSign size={18} style={{ color: '#F97316' }} />
            <h2 className="font-semibold text-lg">Meus Pagamentos</h2>
          </div>

          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm text-muted-foreground">
                    <th className="text-left p-4">Valor</th>
                    <th className="text-left p-4">Vencimento</th>
                    <th className="text-left p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments?.map((payment: any) => {
                    const ps = paymentStatusLabel[payment.status]
                    return (
                      <tr key={payment.id} className="border-b last:border-0">
                        <td className="p-4 font-medium">R$ {Number(payment.amount).toFixed(2)}</td>
                        <td className="p-4 text-muted-foreground">
                          {new Date(payment.dueDate).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="p-4">
                          <Badge style={{ backgroundColor: ps.color, color: 'white' }}>
                            {ps.label}
                          </Badge>
                        </td>
                      </tr>
                    )
                  })}
                  {payments?.length === 0 && (
                    <tr>
                      <td colSpan={3} className="p-6 text-center text-muted-foreground text-sm">
                        Nenhum pagamento registrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}