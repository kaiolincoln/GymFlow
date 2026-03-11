import  prismaClient  from '../../prisma/index';

export class ListPaymentsByStudentService {
  async execute(studentId: string) {
    const payments = await prismaClient.payment.findMany({
      where: { studentId },
      orderBy: { dueDate: 'desc' },
    })

    return payments
  }
}