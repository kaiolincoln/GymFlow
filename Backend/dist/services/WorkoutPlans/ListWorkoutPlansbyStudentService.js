"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorkoutPlansByStudentService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListWorkoutPlansByStudentService {
    async execute(studentId) {
        const plans = await index_1.default.workoutPlan.findMany({
            where: { studentId },
            include: {
                createdBy: { select: { name: true } },
                days: {
                    orderBy: { order: 'asc' },
                    select: { id: true, label: true, order: true },
                },
                _count: { select: { days: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
        return plans;
    }
}
exports.ListWorkoutPlansByStudentService = ListWorkoutPlansByStudentService;
//# sourceMappingURL=ListWorkoutPlansbyStudentService.js.map