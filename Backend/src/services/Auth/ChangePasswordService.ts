import  prismaClient  from '../../prisma/index';
import { compare, hash } from 'bcryptjs'


interface ChangePasswordRequest {
  userId: string
  currentPassword: string
  newPassword: string
}

export class ChangePasswordService {
  async execute({ userId, currentPassword, newPassword }: ChangePasswordRequest) {
    const user = await prismaClient.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Usuário não encontrado.')
    }

    const passwordMatch = await compare(currentPassword, user.password)

    if (!passwordMatch) {
      throw new Error('Senha atual incorreta.')
    }

    const hashedPassword = await hash(newPassword, 8)

    await prismaClient.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    })
  }
}