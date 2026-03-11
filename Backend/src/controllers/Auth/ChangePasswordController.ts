import { Request, Response } from 'express'
import { z } from 'zod'
import { ChangePasswordService } from '../../services/Auth/ChangePasswordService'

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Senha atual obrigatória'),
  newPassword: z.string().min(6, 'Nova senha deve ter no mínimo 6 caracteres'),
})

export class ChangePasswordController {
  async handle(req: Request, res: Response) {
    const parsed = changePasswordSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new ChangePasswordService()

    try {
      await service.execute({ userId: req.userId, ...parsed.data })
      return res.status(204).send()
    } catch (err: any) {
      return res.status(401).json({ error: err.message })
    }
  }
}