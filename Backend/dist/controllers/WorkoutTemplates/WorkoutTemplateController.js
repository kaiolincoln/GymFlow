"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutTemplateController = void 0;
const WorkoutTemplateService_1 = require("../../services/WorkoutTemplates/WorkoutTemplateService");
const index_1 = __importDefault(require("../../prisma/index"));
class WorkoutTemplateController {
    async list(req, res) {
        const templates = WorkoutTemplateService_1.workoutTemplateService.list(req.userId);
        return res.json(templates);
    }
    async create(req, res) {
        const { name, description, days } = req.body;
        if (!name || !days?.length) {
            return res.status(400).json({ error: 'Nome e dias são obrigatórios.' });
        }
        const user = await index_1.default.user.findUnique({
            where: { id: req.userId },
            select: { name: true },
        });
        const template = WorkoutTemplateService_1.workoutTemplateService.create({
            name,
            description,
            createdById: req.userId,
            createdByName: user?.name ?? '',
            days,
        });
        return res.status(201).json(template);
    }
    async createFromPlan(req, res) {
        const planId = req.params.planId;
        const { templateName } = req.body;
        const plan = await index_1.default.workoutPlan.findUnique({
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
        });
        if (!plan)
            return res.status(404).json({ error: 'Ficha não encontrada.' });
        const user = await index_1.default.user.findUnique({
            where: { id: req.userId },
            select: { name: true },
        });
        const template = WorkoutTemplateService_1.workoutTemplateService.create({
            name: templateName || plan.name,
            description: plan.description ?? undefined,
            createdById: req.userId,
            createdByName: user?.name ?? '',
            days: plan.days.map((day) => ({
                label: day.label,
                order: day.order,
                exercises: day.exercises.map((ex) => ({
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
        });
        return res.status(201).json(template);
    }
    async get(req, res) {
        const template = WorkoutTemplateService_1.workoutTemplateService.get(req.params.id);
        if (!template)
            return res.status(404).json({ error: 'Template não encontrado.' });
        return res.json(template);
    }
    async delete(req, res) {
        const deleted = WorkoutTemplateService_1.workoutTemplateService.delete(req.params.id, req.userId);
        if (!deleted)
            return res.status(403).json({ error: 'Template não encontrado ou sem permissão.' });
        return res.status(204).send();
    }
}
exports.WorkoutTemplateController = WorkoutTemplateController;
//# sourceMappingURL=WorkoutTemplateController.js.map