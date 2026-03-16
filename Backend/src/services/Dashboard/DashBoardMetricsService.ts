import prismaClient from '../../prisma/index';

export class DashboardMetricsService {
  async execute() {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

    const [
      totalActive,
      totalOverdue,
      newStudentsThisMonth,
      revenueThisMonth,
      revenueLastMonth,
      paidPaymentsLast6Months,
      studentsLast6Months,
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
      prismaClient.payment.findMany({
        where: {
          status: 'PAID',
          paidAt: { gte: sixMonthsAgo },
        },
        select: { paidAt: true, amount: true },
      }),
      prismaClient.student.findMany({
        where: {
          createdAt: { gte: sixMonthsAgo },
        },
        select: { createdAt: true, status: true },
      }),
    ])

   
    const monthlyData = Array.from({ length: 6 }, (_, i) => {
      const date = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1)
      const year = date.getFullYear()
      const month = date.getMonth()

      const monthLabel = date.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' })

      const revenue = paidPaymentsLast6Months
        .filter(p => {
          const d = new Date(p.paidAt!)
          return d.getFullYear() === year && d.getMonth() === month
        })
        .reduce((sum, p) => sum + Number(p.amount), 0)


      const newStudents = studentsLast6Months.filter(s => {
        const d = new Date(s.createdAt)
        return d.getFullYear() === year && d.getMonth() === month
      }).length

      return { month: monthLabel, revenue, newStudents }
    })

    return {
      totalActive,
      totalOverdue,
      newStudentsThisMonth,
      revenueThisMonth: revenueThisMonth._sum.amount ?? 0,
      revenueLastMonth: revenueLastMonth._sum.amount ?? 0,
      monthlyData,
    }
  }
}