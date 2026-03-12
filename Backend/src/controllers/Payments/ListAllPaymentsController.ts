import { Request, Response } from 'express'
import { ListAllPaymentsService } from '../../services/Payments/ListAllPaymentsService'

export class ListAllPaymentsController {
  async handle(req: Request, res: Response) {
    const { status } = req.query
    const service = new ListAllPaymentsService()
    const payments = await service.execute({ status: status as string | undefined })
    return res.json(payments)
  }
}