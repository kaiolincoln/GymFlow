"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentController = void 0;
const DeleteStudentService_1 = require("../../services/Students/DeleteStudentService");
class DeleteStudentController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new DeleteStudentService_1.DeleteStudentService();
        try {
            await service.execute(id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.DeleteStudentController = DeleteStudentController;
//# sourceMappingURL=DeleteStudentController.js.map