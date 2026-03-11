import { Request, Response } from 'express'
import { string, z } from 'zod'
import { UpdatePaymentStatusService } from '../../services/Payments/UpdatePaymentStatusService'

const updateStatusSchema = z.object({
  status: z.enum(['PAID', 'PENDING', 'OVERDUE']),
})

export class UpdatePaymentStatusController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const parsed = updateStatusSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new UpdatePaymentStatusService()

    try {
      const payment = await service.execute({ id: id as string, ...parsed.data })
      return res.json(payment)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}