import prismaClient from "../../prisma";

class ListExercisesService {
  async execute() {

    const exercises = await prismaClient.exercise.findMany({
      select: {
        id: true,
        name: true,
        muscleGroup: true,
        description: true,
        gifUrl: true
      }
    });

    return exercises;
  }
}

export { ListExercisesService };