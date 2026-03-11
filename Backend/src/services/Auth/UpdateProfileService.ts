import  prismaClient  from '../../prisma/index';

interface UpdateProfileRequest {
  userId: string
  name?: string
  email?: string
}

export class UpdateProfileService {
  async execute({ userId, name, email }: UpdateProfileRequest) {
    if (email) {
      const emailInUse = await prismaClient.user.findFirst({
        where: { email, NOT: { id: userId } },
      })
      if (emailInUse) {
        throw new Error('Email já está em uso.')
      }
    }

    const user = await prismaClient.user.update({
      where: { id: userId },
      data: { name, email },
      select: { id: true, name: true, email: true, role: true },
    })

    return user
  }
}