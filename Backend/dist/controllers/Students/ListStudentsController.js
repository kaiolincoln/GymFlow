"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStudentsController = void 0;
const ListStudentsService_1 = require("../../services/Students/ListStudentsService");
class ListStudentsController {
    async handle(req, res) {
        const { status, plan, search, page, limit } = req.query;
        const service = new ListStudentsService_1.ListStudentsService();
        const result = await service.execute({
            status: status,
            plan: plan,
            search: search,
            page: page ? Number(page) : undefined,
            limit: limit ? Number(limit) : undefined,
        });
        return res.json(result);
    }
}
exports.ListStudentsController = ListStudentsController;
//# sourceMappingURL=ListStudentsController.js.map