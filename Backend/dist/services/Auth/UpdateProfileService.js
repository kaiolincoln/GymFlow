"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class UpdateProfileService {
    async execute({ userId, name, email }) {
        if (email) {
            const emailInUse = await index_1.default.user.findFirst({
                where: { email, NOT: { id: userId } },
            });
            if (emailInUse) {
                throw new Error('Email já está em uso.');
            }
        }
        const user = await index_1.default.user.update({
            where: { id: userId },
            data: { name, email },
            select: { id: true, name: true, email: true, role: true },
        });
        return user;
    }
}
exports.UpdateProfileService = UpdateProfileService;
//# sourceMappingURL=UpdateProfileService.js.map