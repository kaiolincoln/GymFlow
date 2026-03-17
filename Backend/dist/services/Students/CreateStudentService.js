"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentService = void 0;
const bcryptjs_1 = require("bcryptjs");
const index_1 = __importDefault(require("../../prisma/index"));
const planDurations = {
    MONTHLY: 1,
    QUARTERLY: 3,
    SEMIANNUAL: 6,
    ANNUAL: 12,
};
const planAmounts = {
    MONTHLY: 99.90,
    QUARTERLY: 269.90,
    SEMIANNUAL: 499.90,
    ANNUAL: 899.90,
};
class CreateStudentService {
    async execute({ name, email, password, phone, birthDate, goal, plan }) {
        const emailInUse = await index_1.default.user.findUnique({ where: { email } });
        if (emailInUse) {
            throw new Error('Email já cadastrado.');
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 8);
        const selectedPlan = plan ?? 'MONTHLY';
        const user = await index_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'STUDENT',
                student: {
                    create: {
                        phone,
                        goal,
                        plan: selectedPlan,
                        birthDate: birthDate ? new Date(birthDate) : undefined,
                    },
                },
            },
            include: { student: true },
        });
        const months = planDurations[selectedPlan];
        const amount = planAmounts[selectedPlan] / months;
        const payments = Array.from({ length: months }, (_, i) => {
            const dueDate = new Date();
            dueDate.setMonth(dueDate.getMonth() + i);
            dueDate.setDate(1);
            return {
                studentId: user.student.id,
                amount,
                dueDate,
                status: 'PENDING',
            };
        });
        await index_1.default.payment.createMany({ data: payments });
        return {
            id: user.student?.id,
            name: user.name,
            email: user.email,
            plan: user.student?.plan,
            status: user.student?.status,
            createdAt: user.createdAt,
        };
    }
}
exports.CreateStudentService = CreateStudentService;
//# sourceMappingURL=CreateStudentService.js.map