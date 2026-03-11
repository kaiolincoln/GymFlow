import  prismaClient  from '../../prisma/index';

export class DashboardMetricsService {
  async execute() {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0)

    const [
      totalActive,
      totalOverdue,
      newStudentsThisMonth,
      revenueThisMonth,
      revenueLastMonth,
    ] = await Promise.all([
      prismaClient.student.count({ where: { status: 'ACTIVE' } }),
      prismaClient.student.count({ where: { status: 'OVERDUE' } }),
      prismaClient.student.count({ where: { createdAt: { gte: startOfMonth } } }),
      prismaClient.payment.aggregate({
        where: { status: 'PAID', paidAt: { gte: startOfMonth } },
        _sum: { amount: true },
      }),
      prismaClient.payment.aggregate({
        where: { status: 'PAID', paidAt: { gte: startOfLastMonth, lte: endOfLastMonth } },
        _sum: { amount: true },
      }),
    ])

    return {
      totalActive,
      totalOverdue,
      newStudentsThisMonth,
      revenueThisMonth: revenueThisMonth._sum.amount ?? 0,
      revenueLastMonth: revenueLastMonth._sum.amount ?? 0,
    }
  }
}