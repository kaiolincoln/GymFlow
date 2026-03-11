import { Request, Response } from 'express'
import { z } from 'zod'
import { CreatePaymentService } from '../../services/Payments/CreatePaymentService'

const createPaymentSchema = z.object({
  amount: z.number().positive('Valor deve ser positivo'),
  dueDate: z.string(),
  note: z.string().optional(),
})

export class CreatePaymentController {
  async handle(req: Request, res: Response) {
    const { id: studentId } = req.params
    const parsed = createPaymentSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new CreatePaymentService()

    try {
      const payment = await service.execute({ studentId: studentId as string, ...parsed.data })
      return res.status(201).json(payment)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}