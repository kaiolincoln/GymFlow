import  prismaClient  from '../../prisma/index';

export class DeleteStudentService {
  async execute(id: string) {
    const student = await prismaClient.student.findUnique({ where: { id } })

    if (!student) {
      throw new Error('Aluno não encontrado.')
    }

    await prismaClient.user.delete({ where: { id: student.userId } })
  }
}