import  prismaClient  from '../../prisma/index';

export class ListOverdueStudentsService {
  async execute() {
    const students = await prismaClient.student.findMany({
      where: { status: 'OVERDUE' },
      include: {
        user: { select: { name: true, email: true } },
        payments: {
          where: { status: 'OVERDUE' },
          orderBy: { dueDate: 'asc' },
          take: 1,
        },
      },
      orderBy: { updatedAt: 'desc' },
    })

    return students
  }
}