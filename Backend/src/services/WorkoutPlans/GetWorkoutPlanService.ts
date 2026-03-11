import  prismaClient  from '../../prisma/index';

export class GetWorkoutPlanService {
  async execute(id: string) {
    const plan = await prismaClient.workoutPlan.findUnique({
      where: { id },
      include: {
        exercises: {
          include: { exercise: true },
          orderBy: { order: 'asc' },
        },
        createdBy: { select: { name: true } },
        student: { include: { user: { select: { name: true } } } },
      },
    })

    if (!plan) {
      throw new Error('Ficha não encontrada.')
    }

    return plan
  }
}