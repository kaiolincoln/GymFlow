import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateUserService } from '../../services/Auth/CreateUserService'

const createUserSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  role: z.enum(['ADMIN', 'PERSONAL', 'STUDENT']).optional(),
})

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const parsed = createUserSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new CreateUserService()

    try {
      const user = await service.execute(parsed.data)
      return res.status(201).json(user)
    } catch (err: any) {
      return res.status(409).json({ error: err.message })
    }
  }
}