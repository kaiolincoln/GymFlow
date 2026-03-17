"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = isAdmin;
function isAdmin(req, res, next) {
    if (req.userRole !== 'ADMIN') {
        return res.status(403).json({ error: 'Acesso restrito a administradores.' });
    }
    return next();
}
//# sourceMappingURL=isAdmin.js.map