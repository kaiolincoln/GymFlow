import  prismaClient  from '../../prisma/index';

interface UpdatePaymentStatusRequest {
  id: string
  status: 'PAID' | 'PENDING' | 'OVERDUE'
}

export class UpdatePaymentStatusService {
  async execute({ id, status }: UpdatePaymentStatusRequest) {
    const payment = await prismaClient.payment.findUnique({ where: { id } })

    if (!payment) {
      throw new Error('Pagamento não encontrado.')
    }

    const updated = await prismaClient.payment.update({
      where: { id },
      data: {
        status,
        paidAt: status === 'PAID' ? new Date() : null,
      },
    })

    if (status === 'PAID') {
      await prismaClient.student.update({
        where: { id: payment.studentId },
        data: { status: 'ACTIVE' },
      })
    }

    return updated
  }
}