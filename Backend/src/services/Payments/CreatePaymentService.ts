import  prismaClient  from '../../prisma/index';

interface CreatePaymentRequest {
  studentId: string
  amount: number
  dueDate: string
  note?: string
}

export class CreatePaymentService {
  async execute({ studentId, amount, dueDate, note }: CreatePaymentRequest) {
    const student = await prismaClient.student.findUnique({ where: { id: studentId } })

    if (!student) {
      throw new Error('Aluno não encontrado.')
    }

    const payment = await prismaClient.payment.create({
      data: { studentId, amount, dueDate: new Date(dueDate), note },
    })

    return payment
  }
}