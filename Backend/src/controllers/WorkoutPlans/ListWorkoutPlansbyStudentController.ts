import { Request, Response } from 'express'
import { ListWorkoutPlansByStudentService } from '../../services/WorkoutPlans/ListWorkoutPlansbyStudentService'

export class ListWorkoutPlansByStudentController {
  async handle(req: Request, res: Response) {
    const { id: studentId } = req.params
    const service = new ListWorkoutPlansByStudentService()
    const plans = await service.execute(studentId as string)
    return res.json(plans)
  }
}