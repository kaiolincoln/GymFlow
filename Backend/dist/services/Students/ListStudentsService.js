"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStudentsService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListStudentsService {
    async execute({ status, plan, search, page = 1, limit = 20 }) {
        const skip = (page - 1) * limit;
        const students = await index_1.default.student.findMany({
            where: {
                status: status ? status : undefined,
                plan: plan ? plan : undefined,
                user: search
                    ? {
                        OR: [
                            { name: { contains: search, mode: 'insensitive' } },
                            { email: { contains: search, mode: 'insensitive' } },
                        ],
                    }
                    : undefined,
            },
            include: {
                user: { select: { name: true, email: true } },
                _count: { select: { payments: true, workoutPlans: true } },
            },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
        });
        const total = await index_1.default.student.count();
        return { students, total, page, limit };
    }
}
exports.ListStudentsService = ListStudentsService;
//# sourceMappingURL=ListStudentsService.js.map