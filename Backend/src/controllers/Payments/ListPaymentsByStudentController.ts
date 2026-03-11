import { Request, Response } from 'express'
import { ListPaymentsByStudentService } from '../../services/Payments/ListPaymentsByStudentService'

export class ListPaymentsByStudentController {
  async handle(req: Request, res: Response) {
    const { id: studentId } = req.params
    const service = new ListPaymentsByStudentService()
    const payments = await service.execute(studentId as string)
    return res.json(payments)
  }
}