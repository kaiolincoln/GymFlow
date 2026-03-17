"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const Routes_1 = require("./Routes");
exports.app = (0, express_1.default)();
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use((0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: 'Muitas requisições, tente novamente mais tarde.' },
}));
exports.app.use(Routes_1.routes);
exports.app.use((_req, res) => {
    res.status(404).json({ error: 'Rota não encontrada.' });
});
//# sourceMappingURL=App.js.map