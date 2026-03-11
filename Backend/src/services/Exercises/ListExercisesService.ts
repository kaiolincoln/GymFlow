import  prismaClient  from '../../prisma/index';

interface ListExercisesRequest {
  search?: string
  muscleGroup?: string
}

export class ListExercisesService {
  async execute({ search, muscleGroup }: ListExercisesRequest) {
    const exercises = await prismaClient.exercise.findMany({
      where: {
        muscleGroup: muscleGroup ? { equals: muscleGroup, mode: 'insensitive' } : undefined,
        name: search ? { contains: search, mode: 'insensitive' } : undefined,
      },
      orderBy: { name: 'asc' },
    })

    return exercises
  }
}