import  prismaClient  from '../../prisma/index';

interface ListStudentsRequest {
  status?: string
  plan?: string
  search?: string
  page?: number
  limit?: number
}

export class ListStudentsService {
  async execute({ status, plan, search, page = 1, limit = 20 }: ListStudentsRequest) {
    const skip = (page - 1) * limit

    const students = await prismaClient.student.findMany({
      where: {
        status: status ? (status as any) : undefined,
        plan: plan ? (plan as any) : undefined,
        user: search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
              ],
            }
          : undefined,
      },
      include: {
        user: { select: { name: true, email: true } },
        _count: { select: { payments: true, workoutPlans: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    })

    const total = await prismaClient.student.count()

    return { students, total, page, limit }
  }
}