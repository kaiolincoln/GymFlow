import { Request, Response } from 'express'
import { z } from 'zod'
import { UpdateWorkoutPlanService } from '../../services/WorkoutPlans/UpdateWorkoutPlanService'

const updateSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().optional(),
})

export class UpdateWorkoutPlanController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const parsed = updateSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new UpdateWorkoutPlanService()

    try {
      const plan = await service.execute({ id: id as string, ...parsed.data })
      return res.json(plan)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}