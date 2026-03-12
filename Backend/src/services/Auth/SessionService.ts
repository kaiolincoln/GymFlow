import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import prismaClient from '../../prisma/index';

interface SessionRequest {
  email: string
  password: string
}

export class SessionService {
  async execute({ email, password }: SessionRequest) {
    const user = await prismaClient.user.findUnique({
      where: { email },
      include: { student: { select: { id: true } } }
    })

    if (!user) {
      throw new Error('Email ou senha incorretos.')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email ou senha incorretos.')
    }

    const token = sign(
      { sub: user.id, role: user.role },
      String(process.env.JWT_SECRET),
      { expiresIn: '7d' }
    )

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        studentId: user.student?.id ?? null,
      },
    }
  }
}