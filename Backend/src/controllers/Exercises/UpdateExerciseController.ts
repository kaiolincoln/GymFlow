import { Request, Response } from 'express'
import { z } from 'zod'
import { UpdateExerciseService } from '../../services/Exercises/UpdateExerciseService'

const updateExerciseSchema = z.object({
  name: z.string().min(2).optional(),
  muscleGroup: z.string().min(2).optional(),
  description: z.string().optional(),
})

export class UpdateExerciseController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const parsed = updateExerciseSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors })
    }

    const service = new UpdateExerciseService()

    try {
      const exercise = await service.execute({ id: id as string, ...parsed.data })
      return res.json(exercise)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}