"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutTemplateService = exports.WorkoutTemplateService = void 0;
const templates = new Map();
class WorkoutTemplateService {
    list(createdById) {
        const all = Array.from(templates.values());
        return all.filter((t) => !createdById || t.createdById === createdById).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    create(data) {
        const template = {
            ...data,
            id: Math.random().toString(36).slice(2),
            createdAt: new Date().toISOString(),
        };
        templates.set(template.id, template);
        return template;
    }
    get(id) {
        return templates.get(id);
    }
    delete(id, userId) {
        const template = templates.get(id);
        if (!template || template.createdById !== userId)
            return false;
        templates.delete(id);
        return true;
    }
}
exports.WorkoutTemplateService = WorkoutTemplateService;
exports.workoutTemplateService = new WorkoutTemplateService();
//# sourceMappingURL=WorkoutTemplateService.js.map