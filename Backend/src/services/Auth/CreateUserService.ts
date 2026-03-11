import { hash } from 'bcryptjs'
import  prismaClient  from '../../prisma/index';

interface CreateUserRequest {
  name: string
  email: string
  password: string
  role?: 'ADMIN' | 'PERSONAL' | 'STUDENT'
}

export class CreateUserService {
  async execute({ name, email, password, role }: CreateUserRequest) {
    const userExists = await prismaClient.user.findUnique({ where: { email } })

    if (userExists) {
      throw new Error('Email já cadastrado.')
    }

    const hashedPassword = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: { name, email, password: hashedPassword, role: role ?? 'PERSONAL' },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    })

    return user
  }
}