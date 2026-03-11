import { Request, Response } from 'express'
import { GetStudentService } from '../../services/Students/GetStudentService'

export class GetStudentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const service = new GetStudentService()

    try {
      const student = await service.execute(id as string)
      return res.json(student)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}