import prismaClient from '../../prisma/index';
import { AppError } from '../../errors/AppError'; 

export class GetWorkoutPlanService {
  async execute(id: string) {
    const plan = await prismaClient.workoutPlan.findUnique({
      where: { id },
      include: {
        student: { include: { user: true } },
        days: {
          orderBy: { order: 'asc' },
          include: {
            exercises: {
              orderBy: { order: 'asc' },
              include: { exercise: true },
            },
          },
        },
      },
    });

    if (!plan) throw new AppError('Ficha não encontrada', 404);

    return plan;
  }
}