import  prismaClient  from '../../prisma/index';

interface WorkoutExerciseInput {
  exerciseId: string
  sets: number
  reps: string
  load?: string
  rest?: string
  order: number
}

interface CreateWorkoutPlanRequest {
  studentId: string
  createdById: string
  name: string
  description?: string
  exercises?: WorkoutExerciseInput[]
}

export class CreateWorkoutPlanService {
  async execute({ studentId, createdById, name, description, exercises }: CreateWorkoutPlanRequest) {
    const student = await prismaClient.student.findUnique({ where: { id: studentId } })

    if (!student) {
      throw new Error('Aluno não encontrado.')
    }

    const plan = await prismaClient.workoutPlan.create({
      data: {
        studentId,
        createdById,
        name,
        description,
        exercises: exercises ? { create: exercises } : undefined,
      },
      include: { exercises: { include: { exercise: true } } },
    })

    return plan
  }
}