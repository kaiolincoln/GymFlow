"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudentService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class GetStudentService {
    async execute(id) {
        const student = await index_1.default.student.findUnique({
            where: { id },
            include: {
                user: { select: { name: true, email: true } },
                payments: { orderBy: { dueDate: 'desc' }, take: 6 },
                workoutPlans: { orderBy: { createdAt: 'desc' } },
                bodyRecords: { orderBy: { recordedAt: 'desc' }, take: 5 },
            },
        });
        if (!student) {
            throw new Error('Aluno não encontrado.');
        }
        return student;
    }
}
exports.GetStudentService = GetStudentService;
//# sourceMappingURL=GetStudentService.js.map