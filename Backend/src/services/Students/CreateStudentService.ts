import { hash } from 'bcryptjs'
import prismaClient from '../../prisma/index';

interface CreateStudentRequest {
  name: string
  email: string
  password: string
  phone?: string
  birthDate?: string
  goal?: string
  plan?: 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUAL' | 'ANNUAL'
}

const planDurations: Record<string, number> = {
  MONTHLY:    1,
  QUARTERLY:  3,
  SEMIANNUAL: 6,
  ANNUAL:     12,
}

const planAmounts: Record<string, number> = {
  MONTHLY:    99.90,
  QUARTERLY:  269.90,
  SEMIANNUAL: 499.90,
  ANNUAL:     899.90,
}

export class CreateStudentService {
  async execute({ name, email, password, phone, birthDate, goal, plan }: CreateStudentRequest) {
    const emailInUse = await prismaClient.user.findUnique({ where: { email } })

    if (emailInUse) {
      throw new Error('Email já cadastrado.')
    }

    const hashedPassword = await hash(password, 8)
    const selectedPlan = plan ?? 'MONTHLY'

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
            plan: selectedPlan,
            birthDate: birthDate ? new Date(birthDate) : undefined,
          },
        },
      },
      include: { student: true },
    })

    const months = planDurations[selectedPlan]
    const amount = planAmounts[selectedPlan] / months

    const payments = Array.from({ length: months }, (_, i) => {
      const dueDate = new Date()
      dueDate.setMonth(dueDate.getMonth() + i)
      dueDate.setDate(1) 
      return {
        studentId: user.student!.id,
        amount,
        dueDate,
        status: 'PENDING' as const,
      }
    })

    await prismaClient.payment.createMany({ data: payments })

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