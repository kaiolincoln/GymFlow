import { Request, Response } from 'express'
import { z } from 'zod'
import { UpdateStudentService } from '../../services/Students/UpdateStudentService'

const updateStudentSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  goal: z.string().optional(),
  plan: z.enum(['MONTHLY', 'QUARTERLY', 'SEMIANNUAL', 'ANNUAL']).optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'OVERDUE']).optional(),
})

export class UpdateStudentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const parsed = updateStudentSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new UpdateStudentService()

    try {
      await service.execute({ id: id as string, ...parsed.data })
      return res.status(204).send()
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}