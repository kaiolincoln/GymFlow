import prismaClient from '../../prisma/index'

interface ListAllPaymentsRequest {
  status?: string
}

export class ListAllPaymentsService {
  async execute({ status }: ListAllPaymentsRequest) {
    const payments = await prismaClient.payment.findMany({
      where: {
        ...(status && status !== 'ALL' ? { status: status as any } : {}),
      },
      include: {
        student: {
          include: {
            user: { select: { name: true, email: true } },
          },
        },
      },
      orderBy: { dueDate: 'desc' },
    })

    return payments
  }
}