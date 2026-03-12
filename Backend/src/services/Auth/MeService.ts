import prismaClient from '../../prisma/index';

export class MeService {
  async execute(userId: string) {
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        student: {
          select: { id: true }
        }
      },
    })

    if (!user) {
      throw new Error('Usuário não encontrado.')
    }

    return {
      ...user,
      studentId: user.student?.id ?? null,
    }
  }
}