import prismaClient from '../../prisma/index'

interface CreateExerciseRequest {
  name: string
  muscleGroup: string
  description?: string
  gifUrl?: string
}

export class CreateExerciseService {
  async execute({ name, muscleGroup, description, gifUrl }: CreateExerciseRequest) {

    if (!name || !muscleGroup) {
      throw new Error("Name e muscleGroup são obrigatórios")
    }

    const exercise = await prismaClient.exercise.create({
      data: {
        name,
        muscleGroup,
        description: description ?? null,
        gifUrl: gifUrl ?? null
      },
    })

    return exercise
  }
}