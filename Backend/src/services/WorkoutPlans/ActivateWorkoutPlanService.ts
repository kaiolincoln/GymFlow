import  prismaClient  from '../../prisma/index';

export class ActivateWorkoutPlanService {
  async execute(id: string) {
    const plan = await prismaClient.workoutPlan.findUnique({ where: { id } })

    if (!plan) {
      throw new Error('Ficha não encontrada.')
    }

    await prismaClient.workoutPlan.updateMany({
      where: { studentId: plan.studentId },
      data: { active: false },
    })

    await prismaClient.workoutPlan.update({
      where: { id },
      data: { active: true },
    })
  }
}