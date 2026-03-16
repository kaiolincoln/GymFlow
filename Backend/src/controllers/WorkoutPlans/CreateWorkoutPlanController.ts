import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateWorkoutPlanService } from '../../services/WorkoutPlans/CreateWorkoutPlanService'

const exerciseSchema = z.object({
  exerciseId: z.string().uuid(),
  sets: z.number().int().positive(),
  reps: z.string(),
  load: z.string().optional(),
  rest: z.string().optional(),
  order: z.number().int(),
})

const daySchema = z.object({
  label: z.string().min(1),
  order: z.number().int(),
  exercises: z.array(exerciseSchema).default([]),
})

const createWorkoutPlanSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  days: z.array(daySchema).default([]),
})

export class CreateWorkoutPlanController {
  async handle(req: Request, res: Response) {
    const { id: studentId } = req.params
    const parsed = createWorkoutPlanSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new CreateWorkoutPlanService()

    try {
      const plan = await service.execute({
        studentId: studentId as string,
        createdById: req.userId,
        ...parsed.data,
      })
      return res.status(201).json(plan)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}