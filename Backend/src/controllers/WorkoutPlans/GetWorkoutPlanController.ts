import { Request, Response } from 'express'
import { GetWorkoutPlanService } from '../../services/WorkoutPlans/GetWorkoutPlanService'

export class GetWorkoutPlanController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const service = new GetWorkoutPlanService()

    try {
      const plan = await service.execute(id as string)
      return res.json(plan)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}