import { Request, Response } from 'express'
import { workoutTemplateService } from '../../services/WorkoutTemplates/WorkoutTemplateService'
import prismaClient from '../../prisma/index'

export class WorkoutTemplateController {
  async list(req: Request, res: Response) {
    const templates = workoutTemplateService.list(req.userId)
    return res.json(templates)
  }

  async create(req: Request, res: Response) {
    const { name, description, days } = req.body

    if (!name || !days?.length) {
      return res.status(400).json({ error: 'Nome e dias são obrigatórios.' })
    }

    const user = await prismaClient.user.findUnique({
      where: { id: req.userId },
      select: { name: true },
    })

    const template = workoutTemplateService.create({
      name,
      description,
      createdById: req.userId,
      createdByName: user?.name ?? '',
      days,
    })

    return res.status(201).json(template)
  }

  async createFromPlan(req: Request, res: Response) {
    const planId = req.params.planId as string
    const { templateName } = req.body

    const plan = await prismaClient.workoutPlan.findUnique({
      where: { id: planId },
      include: {
        days: {
          orderBy: { order: 'asc' },
          include: {
            exercises: {
              orderBy: { order: 'asc' },
              include: { exercise: true },
            },
          },
        },
      },
    })

    if (!plan) return res.status(404).json({ error: 'Ficha não encontrada.' })

    const user = await prismaClient.user.findUnique({
      where: { id: req.userId },
      select: { name: true },
    })

    const template = workoutTemplateService.create({
      name: templateName || plan.name,
      description: plan.description ?? undefined,
      createdById: req.userId,
      createdByName: user?.name ?? '',
      days: plan.days.map((day: any) => ({
        label: day.label,
        order: day.order,
        exercises: day.exercises.map((ex: any) => ({
          exerciseId: ex.exerciseId,
          exerciseName: ex.exercise.name,
          muscleGroup: ex.exercise.muscleGroup,
          sets: ex.sets,
          reps: ex.reps,
          load: ex.load ?? undefined,
          rest: ex.rest ?? undefined,
          order: ex.order,
        })),
      })),
    })

    return res.status(201).json(template)
  }

  async get(req: Request, res: Response) {
    const template = workoutTemplateService.get(req.params.id as string)
    if (!template) return res.status(404).json({ error: 'Template não encontrado.' })
    return res.json(template)
  }

  async delete(req: Request, res: Response) {
    const deleted = workoutTemplateService.delete(req.params.id as string, req.userId)
    if (!deleted) return res.status(403).json({ error: 'Template não encontrado ou sem permissão.' })
    return res.status(204).send()
  }
}