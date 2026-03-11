import { Request, Response } from 'express'
import { DashboardMetricsService } from '../../services/Dashboard/DashBoardMetricsService'

export class DashboardMetricsController {
  async handle(_req: Request, res: Response) {
    const service = new DashboardMetricsService()
    const metrics = await service.execute()
    return res.json(metrics)
  }
}