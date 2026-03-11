import { Request, Response } from 'express'
import { ListExercisesService } from '../../services/Exercises/ListExercisesService'

export class ListExercisesController {
  async handle(req: Request, res: Response) {
    const { search, muscleGroup } = req.query
    const service = new ListExercisesService()

    const exercises = await service.execute({
      search: search as string,
      muscleGroup: muscleGroup as string,
    })

    return res.json(exercises)
  }
}