"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class UpdateStudentService {
    async execute({ id, name, email, phone, birthDate, goal, plan, status }) {
        const student = await index_1.default.student.findUnique({ where: { id } });
        if (!student) {
            throw new Error('Aluno não encontrado.');
        }
        await index_1.default.student.update({
            where: { id },
            data: {
                phone,
                goal,
                plan,
                status,
                birthDate: birthDate ? new Date(birthDate) : undefined,
                user: { update: { name, email } },
            },
        });
    }
}
exports.UpdateStudentService = UpdateStudentService;
//# sourceMappingURL=UpdateStudentService.js.map