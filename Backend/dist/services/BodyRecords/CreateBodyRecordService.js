"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBodyRecordService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class CreateBodyRecordService {
    async execute({ studentId, weight, height, bodyFat, notes }) {
        const record = await index_1.default.bodyRecord.create({
            data: { studentId, weight, height, bodyFat, notes },
        });
        return record;
    }
}
exports.CreateBodyRecordService = CreateBodyRecordService;
//# sourceMappingURL=CreateBodyRecordService.js.map