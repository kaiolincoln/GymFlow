import  prismaClient  from '../../prisma/index';

export class DeleteExerciseService {
  async execute(id: string) {
    const exercise = await prismaClient.exercise.findUnique({ where: { id } })

    if (!exercise) {
      throw new Error('Exercício não encontrado.')
    }

    await prismaClient.exercise.delete({ where: { id } })
  }
}