import  prismaClient  from '../../prisma/index';

export class GetStudentService {
  async execute(id: string) {
    const student = await prismaClient.student.findUnique({
      where: { id },
      include: {
        user: { select: { name: true, email: true } },
        payments: { orderBy: { dueDate: 'desc' }, take: 6 },
        workoutPlans: { orderBy: { createdAt: 'desc' } },
        bodyRecords: { orderBy: { recordedAt: 'desc' }, take: 5 },
      },
    })

    if (!student) {
      throw new Error('Aluno não encontrado.')
    }

    return student
  }
}