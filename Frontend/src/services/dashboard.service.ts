import { api } from '@/lib/api'
import { DashboardMetrics } from '@/types'

export const dashboardService = {
  async getMetrics(): Promise<DashboardMetrics> {
    const { data } = await api.get('/dashboard/metrics')
    return data
  },
}