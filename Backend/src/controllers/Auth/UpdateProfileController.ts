import { Request, Response } from 'express'
import { z } from 'zod'
import { UpdateProfileService } from '../../services/Auth/UpdateProfileService'

const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
})

export class UpdateProfileController {
  async handle(req: Request, res: Response) {
    const parsed = updateProfileSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new UpdateProfileService()

    try {
      const user = await service.execute({ userId: req.userId, ...parsed.data })
      return res.json(user)
    } catch (err: any) {
      return res.status(409).json({ error: err.message })
    }
  }
}