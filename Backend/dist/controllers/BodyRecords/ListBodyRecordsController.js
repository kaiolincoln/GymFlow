"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBodyRecordsController = void 0;
const ListBodyRecordsService_1 = require("../../services/BodyRecords/ListBodyRecordsService");
class ListBodyRecordsController {
    async handle(req, res) {
        const { id: studentId } = req.params;
        const service = new ListBodyRecordsService_1.ListBodyRecordsService();
        const records = await service.execute(studentId);
        return res.json(records);
    }
}
exports.ListBodyRecordsController = ListBodyRecordsController;
//# sourceMappingURL=ListBodyRecordsController.js.map