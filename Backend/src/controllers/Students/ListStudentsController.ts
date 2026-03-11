import { Request, Response } from 'express'
import { ListStudentsService } from '../../services/Students/ListStudentsService'

export class ListStudentsController {
  async handle(req: Request, res: Response) {
    const { status, plan, search, page, limit } = req.query

    const service = new ListStudentsService()

    const result = await service.execute({
      status: status as string,
      plan: plan as string,
      search: search as string,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    })

    return res.json(result)
  }
}