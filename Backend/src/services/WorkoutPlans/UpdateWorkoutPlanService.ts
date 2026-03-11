import  prismaClient  from '../../prisma/index';

interface UpdateWorkoutPlanRequest {
  id: string
  name?: string
  description?: string
}

export class UpdateWorkoutPlanService {
  async execute({ id, name, description }: UpdateWorkoutPlanRequest) {
    const plan = await prismaClient.workoutPlan.findUnique({ where: { id } })

    if (!plan) {
      throw new Error('Ficha não encontrada.')
    }

    const updated = await prismaClient.workoutPlan.update({
      where: { id },
      data: { name, description },
    })

    return updated
  }
}