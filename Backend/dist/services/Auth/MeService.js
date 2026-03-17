"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class MeService {
    async execute(userId) {
        const user = await index_1.default.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                student: {
                    select: { id: true }
                }
            },
        });
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        return {
            ...user,
            studentId: user.student?.id ?? null,
        };
    }
}
exports.MeService = MeService;
//# sourceMappingURL=MeService.js.map