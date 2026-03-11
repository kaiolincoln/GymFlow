import  prismaClient  from '../../prisma/index';

interface UpdateExerciseRequest {
  id: string
  name?: string
  muscleGroup?: string
  description?: string
}

export class UpdateExerciseService {
  async execute({ id, name, muscleGroup, description }: UpdateExerciseRequest) {
    const exercise = await prismaClient.exercise.findUnique({ where: { id } })

    if (!exercise) {
      throw new Error('Exercício não encontrado.')
    }

    const updated = await prismaClient.exercise.update({
      where: { id },
      data: { name, muscleGroup, description },
    })

    return updated
  }
}