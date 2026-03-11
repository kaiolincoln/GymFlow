import { Request, Response } from 'express'
import { DeleteStudentService } from '../../services/Students/DeleteStudentService'

export class DeleteStudentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const service = new DeleteStudentService()

    try {
      await service.execute(id as string) 
      return res.status(204).send()
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}