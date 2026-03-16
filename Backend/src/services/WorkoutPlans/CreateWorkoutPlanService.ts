import prismaClient from '../../prisma/index';

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

interface CreateWorkoutPlanInput {
  studentId: string;
  createdById: string;
  name: string;
  description?: string;
  days: DayInput[];
}

export class CreateWorkoutPlanService {
  async execute({ studentId, createdById, name, description, days }: CreateWorkoutPlanInput) {
    const plan = await prismaClient.workoutPlan.create({
      data: {
        studentId,
        createdById,
        name,
        description,
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