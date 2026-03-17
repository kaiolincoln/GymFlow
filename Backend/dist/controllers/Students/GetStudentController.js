"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudentController = void 0;
const GetStudentService_1 = require("../../services/Students/GetStudentService");
class GetStudentController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new GetStudentService_1.GetStudentService();
        try {
            const student = await service.execute(id);
            return res.json(student);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.GetStudentController = GetStudentController;
//# sourceMappingURL=GetStudentController.js.map