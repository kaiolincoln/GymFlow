import  prismaClient  from '../../prisma/index';

export class ListUpcomingPaymentsService {
  async execute() {
    const today = new Date()
    const in7Days = new Date()
    in7Days.setDate(today.getDate() + 7)

    const payments = await prismaClient.payment.findMany({
      where: {
        status: 'PENDING',
        dueDate: { gte: today, lte: in7Days },
      },
      include: {
        student: {
          include: { user: { select: { name: true, email: true } } },
        },
      },
      orderBy: { dueDate: 'asc' },
    })

    return payments
  }
}