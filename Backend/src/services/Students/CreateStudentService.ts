import { hash } from 'bcryptjs'
import  prismaClient  from '../../prisma/index';

interface CreateStudentRequest {
  name: string
  email: string
  password: string
  phone?: string
  birthDate?: string
  goal?: string
  plan?: 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUAL' | 'ANNUAL'
}

export class CreateStudentService {
  async execute({ name, email, password, phone, birthDate, goal, plan }: CreateStudentRequest) {
    const emailInUse = await prismaClient.user.findUnique({ where: { email } })

    if (emailInUse) {
      throw new Error('Email já cadastrado.')
    }

    const hashedPassword = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'STUDENT',
        student: {
          create: {
            phone,
            goal,
            plan: plan ?? 'MONTHLY',
            birthDate: birthDate ? new Date(birthDate) : undefined,
          },
        },
      },
      include: { student: true },
    })

    return {
      id: user.student?.id,
      name: user.name,
      email: user.email,
      plan: user.student?.plan,
      status: user.student?.status,
      createdAt: user.createdAt,
    }
  }
}