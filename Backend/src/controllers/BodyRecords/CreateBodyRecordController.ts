// ─── CreateBodyRecordController.ts ───────────────────────────────────────────
// Salvar em: src/controllers/BodyRecords/CreateBodyRecordController.ts

import { Request, Response } from 'express';
import { z } from 'zod';
import { CreateBodyRecordService } from '../../services/BodyRecords/CreateBodyRecordService';

const schema = z.object({
  weight: z.number().positive().optional(),
  height: z.number().positive().optional(),
  bodyFat: z.number().min(0).max(100).optional(),
  notes: z.string().optional(),
});

export class CreateBodyRecordController {
  async handle(req: Request, res: Response) {
    const { id: studentId } = req.params;
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    }

    const service = new CreateBodyRecordService();
    try {
      const record = await service.execute({ studentId: studentId as string, ...parsed.data });
      return res.status(201).json(record);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}


