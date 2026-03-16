import prismaClient from '../../prisma/index';
import { AppError } from '../../errors/AppError';

interface ExerciseInput {
  exerciseId: string;
  sets: number;
  reps: string;
  load?: string;
  rest?: string;
  order: number;
}

interface DayInput {
  label: string;
  order: number;
  exercises: ExerciseInput[];
}

interface UpdateWorkoutPlanInput {
  id: string;
  name?: string;
  description?: string;
  days?: DayInput[];
}

export class UpdateWorkoutPlanService {
  async execute({ id, name, description, days }: UpdateWorkoutPlanInput) {
    const existing = await prismaClient.workoutPlan.findUnique({ where: { id } });
    if (!existing) throw new AppError('Ficha não encontrada', 404);
    if (days !== undefined) {
      await prismaClient.workoutDay.deleteMany({ where: { workoutPlanId: id } });
    }

    const plan = await prismaClient.workoutPlan.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(days !== undefined && {
          days: {
            create: days.map((day) => ({
              label: day.label,
              order: day.order,
              exercises: {
                create: day.exercises.map((ex) => ({
                  exerciseId: ex.exerciseId,
                  sets: ex.sets,
                  reps: ex.reps,
                  load: ex.load,
                  rest: ex.rest,
                  order: ex.order,
                })),
              },
            })),
          },
        }),
      },
      include: {
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

    return plan;
  }
}