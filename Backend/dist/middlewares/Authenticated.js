"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticated = Authenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function Authenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não informado.' });
    }
    const [, token] = authHeader.split(' ');
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.userId = decoded.sub;
        req.userRole = decoded.role;
        return next();
    }
    catch {
        return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
}
//# sourceMappingURL=Authenticated.js.map