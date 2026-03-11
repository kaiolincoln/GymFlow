import  prismaClient  from '../../prisma/index';

interface CreateExerciseRequest {
  name: string
  muscleGroup: string
  description?: string
}

export class CreateExerciseService {
  async execute({ name, muscleGroup, description }: CreateExerciseRequest) {
    const exercise = await prismaClient.exercise.create({
      data: { name, muscleGroup, description },
    })

    return exercise
  }
}