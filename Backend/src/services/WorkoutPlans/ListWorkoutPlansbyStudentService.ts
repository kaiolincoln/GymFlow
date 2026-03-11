import  prismaClient  from '../../prisma/index';

export class ListWorkoutPlansByStudentService {
  async execute(studentId: string) {
    const plans = await prismaClient.workoutPlan.findMany({
      where: { studentId },
      include: {
        createdBy: { select: { name: true } },
        _count: { select: { exercises: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    return plans
  }
}