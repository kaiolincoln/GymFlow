"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOverdueStudentsService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListOverdueStudentsService {
    async execute() {
        const students = await index_1.default.student.findMany({
            where: { status: 'OVERDUE' },
            include: {
                user: { select: { name: true, email: true } },
                payments: {
                    where: { status: 'OVERDUE' },
                    orderBy: { dueDate: 'asc' },
                    take: 1,
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
        return students;
    }
}
exports.ListOverdueStudentsService = ListOverdueStudentsService;
//# sourceMappingURL=ListOverdueStudentsService.js.map