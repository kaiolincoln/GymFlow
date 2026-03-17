"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
const bcryptjs_1 = require("bcryptjs");
class ChangePasswordService {
    async execute({ userId, currentPassword, newPassword }) {
        const user = await index_1.default.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        const passwordMatch = await (0, bcryptjs_1.compare)(currentPassword, user.password);
        if (!passwordMatch) {
            throw new Error('Senha atual incorreta.');
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(newPassword, 8);
        await index_1.default.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });
    }
}
exports.ChangePasswordService = ChangePasswordService;
//# sourceMappingURL=ChangePasswordService.js.map