'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'

const statusLabel: Record<string, { label: string; color: string; icon: any }> = {
  PAID:    { label: 'Pago',     color: '#22C55E', icon: CheckCircle },
  PENDING: { label: 'Pendente', color: '#EAB308', icon: Clock },
  OVERDUE: { label: 'Vencido',  color: '#EF4444', icon: AlertCircle },
}

const filters = [
  { value: 'ALL',     label: 'Todos' },
  { value: 'PENDING', label: 'Pendentes' },
  { value: 'PAID',    label: 'Pagos' },
  { value: 'OVERDUE', label: 'Vencidos' },
]

async function listAllPayments(status: string) {
  const res = await api.get('/payments', { params: { status } })
  return res.data
}

async function updatePaymentStatus(id: string, status: string) {
  const res = await api.patch(`/payments/${id}/status`, { status })
  return res.data
}

export default function PaymentsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const queryClient = useQueryClient()

  const { data: payments, isLoading } = useQuery({
    queryKey: ['payments', activeFilter],
    queryFn: () => listAllPayments(activeFilter),
  })

  const { mutate: markAsPaid } = useMutation({
    mutationFn: (id: string) => updatePaymentStatus(id, 'PAID'),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['payments'] }),
  })

  const { mutate: markAsOverdue } = useMutation({
    mutationFn: (id: string) => updatePaymentStatus(id, 'OVERDUE'),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['payments'] }),
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Pagamentos</h1>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all border"
            style={{
              backgroundColor: activeFilter === f.value ? '#F97316' : 'transparent',
              color: activeFilter === f.value ? 'white' : undefined,
              borderColor: activeFilter === f.value ? '#F97316' : undefined,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
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
                  <th className="text-left p-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment: any) => {
                  const st = statusLabel[payment.status]
                  const Icon = st.icon
                  return (
                    <tr key={payment.id} className="border-b last:border-0 hover:bg-muted/40 transition-colors">
                      <td className="p-4">
                        <p className="font-medium">{payment.student?.user?.name}</p>
                        <p className="text-xs text-muted-foreground">{payment.student?.user?.email}</p>
                      </td>
                      <td className="p-4 font-medium">
                        R$ {Number(payment.amount).toFixed(2)}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {new Date(payment.dueDate).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="p-4">
                        <Badge
                          className="flex items-center gap-1 w-fit"
                          style={{ backgroundColor: st.color, color: 'white' }}
                        >
                          <Icon size={11} />
                          {st.label}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {payment.status !== 'PAID' && (
                            <button
                              onClick={() => markAsPaid(payment.id)}
                              className="text-xs px-3 py-1 rounded-full text-white transition-all"
                              style={{ backgroundColor: '#22C55E' }}
                            >
                              Marcar pago
                            </button>
                          )}
                          {payment.status === 'PENDING' && (
                            <button
                              onClick={() => markAsOverdue(payment.id)}
                              className="text-xs px-3 py-1 rounded-full border transition-all text-muted-foreground hover:border-red-400 hover:text-red-500"
                            >
                              Vencido
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {payments?.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-muted-foreground">
                      Nenhum pagamento encontrado.
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