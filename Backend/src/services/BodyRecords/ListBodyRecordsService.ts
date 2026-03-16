import prismaClient from '../../prisma/index';

export class ListBodyRecordsService {
  async execute(studentId: string) {
    const records = await prismaClient.bodyRecord.findMany({
      where: { studentId },
      orderBy: { recordedAt: 'asc' },
    });
    return records;
  }
}