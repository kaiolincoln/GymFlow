"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBodyRecordsService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListBodyRecordsService {
    async execute(studentId) {
        const records = await index_1.default.bodyRecord.findMany({
            where: { studentId },
            orderBy: { recordedAt: 'asc' },
        });
        return records;
    }
}
exports.ListBodyRecordsService = ListBodyRecordsService;
//# sourceMappingURL=ListBodyRecordsService.js.map