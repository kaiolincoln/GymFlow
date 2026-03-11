import { Request, Response } from 'express'
import { ActivateWorkoutPlanService } from '../../services/WorkoutPlans/ActivateWorkoutPlanService'

export class ActivateWorkoutPlanController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const service = new ActivateWorkoutPlanService()

    try {
      await service.execute(id as string)
      return res.status(204).send()
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}