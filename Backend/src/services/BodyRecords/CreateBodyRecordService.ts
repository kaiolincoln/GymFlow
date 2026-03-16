import prismaClient from '../../prisma/index';

interface CreateBodyRecordInput {
  studentId: string;
  weight?: number;
  height?: number;
  bodyFat?: number;
  notes?: string;
}

export class CreateBodyRecordService {
  async execute({ studentId, weight, height, bodyFat, notes }: CreateBodyRecordInput) {
    const record = await prismaClient.bodyRecord.create({
      data: { studentId, weight, height, bodyFat, notes },
    });
    return record;
  }
}