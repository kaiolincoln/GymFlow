"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const index_1 = __importDefault(require("../../prisma/index"));
class CreateUserService {
    async execute({ name, email, password, role }) {
        const userExists = await index_1.default.user.findUnique({ where: { email } });
        if (userExists) {
            throw new Error('Email já cadastrado.');
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 8);
        const user = await index_1.default.user.create({
            data: { name, email, password: hashedPassword, role: role ?? 'PERSONAL' },
            select: { id: true, name: true, email: true, role: true, createdAt: true },
        });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map