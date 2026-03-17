"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class DeleteStudentService {
    async execute(id) {
        const student = await index_1.default.student.findUnique({ where: { id } });
        if (!student) {
            throw new Error('Aluno não encontrado.');
        }
        await index_1.default.user.delete({ where: { id: student.userId } });
    }
}
exports.DeleteStudentService = DeleteStudentService;
//# sourceMappingURL=DeleteStudentService.js.map