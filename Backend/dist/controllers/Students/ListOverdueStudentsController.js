"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOverdueStudentsController = void 0;
const ListOverdueStudentsService_1 = require("../../services/Students/ListOverdueStudentsService");
class ListOverdueStudentsController {
    async handle(_req, res) {
        const service = new ListOverdueStudentsService_1.ListOverdueStudentsService();
        const students = await service.execute();
        return res.json(students);
    }
}
exports.ListOverdueStudentsController = ListOverdueStudentsController;
//# sourceMappingURL=ListOverdueStudentsController.js.map