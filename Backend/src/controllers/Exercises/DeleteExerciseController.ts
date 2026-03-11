import { Request, Response } from 'express'
import { DeleteExerciseService } from '../../services/Exercises/DeleteExerciseService'

export class DeleteExerciseController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const service = new DeleteExerciseService()

    try {
      await service.execute(id as string)
      return res.status(204).send()
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}