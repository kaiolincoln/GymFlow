import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateStudentService } from '../../services/Students/CreateStudentService'

const createStudentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  goal: z.string().optional(),
  plan: z.enum(['MONTHLY', 'QUARTERLY', 'SEMIANNUAL', 'ANNUAL']).optional(),
})

export class CreateStudentController {
  async handle(req: Request, res: Response) {
    const parsed = createStudentSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new CreateStudentService()

    try {
      const student = await service.execute(parsed.data)
      return res.status(201).json(student)
    } catch (err: any) {
      return res.status(409).json({ error: err.message })
    }
  }
}