import { Request, Response } from 'express'
import { ListUpcomingPaymentsService } from '../../services/Payments/ListUpcomingPaymentsService'

export class ListUpcomingPaymentsController {
  async handle(_req: Request, res: Response) {
    const service = new ListUpcomingPaymentsService()
    const payments = await service.execute()
    return res.json(payments)
  }
}