import { Request, Response } from 'express'
import { ListOverdueStudentsService } from '../../services/Students/ListOverdueStudentsService'

export class ListOverdueStudentsController {
  async handle(_req: Request, res: Response) {
    const service = new ListOverdueStudentsService()
    const students = await service.execute()
    return res.json(students)
  }
}