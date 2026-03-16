import { Request, Response } from 'express';
import { ListBodyRecordsService } from '../../services/BodyRecords/ListBodyRecordsService';

export class ListBodyRecordsController {
  async handle(req: Request, res: Response) {
    const { id: studentId } = req.params;
    const service = new ListBodyRecordsService();
    const records = await service.execute(studentId as string);
    return res.json(records);
  }
}