'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { paymentsService } from '@/services/payments.service'
import { Payment } from '@/types'

const statusLabel: Record<string, { label: string; color: string }> = {
  PAID:    { label: 'Pago',     color: '#22C55E' },
  PENDING: { label: 'Pendente', color: '#EAB308' },
  OVERDUE: { label: 'Vencido',  color: '#EF4444' },
}

export default function PaymentsPage() {
  const { data: upcoming, isLoading } = useQuery({
    queryKey: ['payments-upcoming'],
    queryFn: paymentsService.listUpcoming,
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Pagamentos</h1>
      </div>

      <h2 className="text-lg font-semibold mb-3 text-muted-foreground">Vencendo nos próximos 7 dias</h2>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="h-16" />
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm text-muted-foreground">
                  <th className="text-left p-4">Aluno</th>
                  <th className="text-left p-4">Valor</th>
                  <th className="text-left p-4">Vencimento</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {upcoming?.map((payment: any) => {
                  const status = statusLabel[payment.status]
                  return (
                    <tr key={payment.id} className="border-b last:border-0 hover:bg-muted/40 transition-colors">
                      <td className="p-4 font-medium">{payment.student?.user?.name}</td>
                      <td className="p-4">R$ {Number(payment.amount).toFixed(2)}</td>
                      <td className="p-4 text-muted-foreground">
                        {new Date(payment.dueDate).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="p-4">
                        <Badge style={{ backgroundColor: status.color, color: 'white' }}>
                          {status.label}
                        </Badge>
                      </td>
                    </tr>
                  )
                })}
                {upcoming?.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-muted-foreground">
                      Nenhum pagamento vencendo nos próximos 7 dias 🎉
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}