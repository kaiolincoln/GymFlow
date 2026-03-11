import { Request, Response } from 'express'
import { MeService } from '../../services/Auth/MeService'

export class MeController {
  async handle(req: Request, res: Response) {
    const service = new MeService()

    try {
      const user = await service.execute(req.userId)
      return res.json(user)
    } catch (err: any) {
      return res.status(404).json({ error: err.message })
    }
  }
}