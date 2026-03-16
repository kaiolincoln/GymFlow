import prismaClient from '../../prisma/index';

export class ListWorkoutPlansByStudentService {
  async execute(studentId: string) {
    const plans = await prismaClient.workoutPlan.findMany({
      where: { studentId },
      include: {
        createdBy: { select: { name: true } },
        days: {
          orderBy: { order: 'asc' },
          select: { id: true, label: true, order: true },
        },
        _count: { select: { days: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    return plans
  }
}