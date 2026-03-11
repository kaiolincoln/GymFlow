import  prismaClient  from '../../prisma/index';

export class DeleteWorkoutPlanService {
  async execute(id: string) {
    const plan = await prismaClient.workoutPlan.findUnique({ where: { id } })

    if (!plan) {
      throw new Error('Ficha não encontrada.')
    }

    await prismaClient.workoutPlan.delete({ where: { id } })
  }
}