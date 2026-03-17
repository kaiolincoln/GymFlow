"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const index_1 = __importDefault(require("../../prisma/index"));
class SessionService {
    async execute({ email, password }) {
        const user = await index_1.default.user.findUnique({
            where: { email },
            include: { student: { select: { id: true } } }
        });
        if (!user) {
            throw new Error('Email ou senha incorretos.');
        }
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error('Email ou senha incorretos.');
        }
        const token = (0, jsonwebtoken_1.sign)({ sub: user.id, role: user.role }, String(process.env.JWT_SECRET), { expiresIn: '7d' });
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                studentId: user.student?.id ?? null,
            },
        };
    }
}
exports.SessionService = SessionService;
//# sourceMappingURL=SessionService.js.map