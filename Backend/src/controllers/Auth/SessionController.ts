import { Request, Response } from 'express'
import { z } from 'zod'
import { SessionService } from '../../services/Auth/SessionService'

const sessionSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
})

export class SessionController {
  async handle(req: Request, res: Response) {
    const parsed = sessionSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new SessionService()

    try {
      const result = await service.execute(parsed.data)
      return res.json(result)
    } catch (err: any) {
      return res.status(401).json({ error: err.message })
    }
  }
}