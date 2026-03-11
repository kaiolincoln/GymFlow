import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateExerciseService } from '../../services/Exercises/CreateExerciseService'

const exerciseSchema = z.object({
  name: z.string().min(2),
  muscleGroup: z.string().min(2),
  description: z.string().optional(),
})

export class CreateExerciseController {
  async handle(req: Request, res: Response) {
    const parsed = exerciseSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new CreateExerciseService()
    const exercise = await service.execute(parsed.data)

    return res.status(201).json(exercise)
  }
}