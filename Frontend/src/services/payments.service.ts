import { api } from '@/lib/api'
import { Payment } from '@/types'

export const paymentsService = {
  async listByStudent(studentId: string): Promise<Payment[]> {
    const { data } = await api.get(`/students/${studentId}/payments`)
    return data
  },

  async listUpcoming(): Promise<Payment[]> {
    const { data } = await api.get('/payments/upcoming')
    return data
  },

  async create(studentId: string, payload: { amount: number; dueDate: string; note?: string }): Promise<Payment> {
    const { data } = await api.post(`/students/${studentId}/payments`, payload)
    return data
  },

  async updateStatus(id: string, status: 'PAID' | 'PENDING' | 'OVERDUE'): Promise<Payment> {
    const { data } = await api.patch(`/payments/${id}/status`, { status })
    return data
  },
}