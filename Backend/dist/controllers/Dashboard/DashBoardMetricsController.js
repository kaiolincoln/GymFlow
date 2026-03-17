"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardMetricsController = void 0;
const DashBoardMetricsService_1 = require("../../services/Dashboard/DashBoardMetricsService");
class DashboardMetricsController {
    async handle(_req, res) {
        const service = new DashBoardMetricsService_1.DashboardMetricsService();
        const metrics = await service.execute();
        return res.json(metrics);
    }
}
exports.DashboardMetricsController = DashboardMetricsController;
//# sourceMappingURL=DashBoardMetricsController.js.map