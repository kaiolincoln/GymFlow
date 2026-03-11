import  prismaClient  from '../../prisma/index';

interface UpdateStudentRequest {
  id: string
  name?: string
  email?: string
  phone?: string
  birthDate?: string
  goal?: string
  plan?: 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUAL' | 'ANNUAL'
  status?: 'ACTIVE' | 'INACTIVE' | 'OVERDUE'
}

export class UpdateStudentService {
  async execute({ id, name, email, phone, birthDate, goal, plan, status }: UpdateStudentRequest) {
    const student = await prismaClient.student.findUnique({ where: { id } })

    if (!student) {
      throw new Error('Aluno não encontrado.')
    }

    await prismaClient.student.update({
      where: { id },
      data: {
        phone,
        goal,
        plan,
        status,
        birthDate: birthDate ? new Date(birthDate) : undefined,
        user: { update: { name, email } },
      },
    })
  }
}