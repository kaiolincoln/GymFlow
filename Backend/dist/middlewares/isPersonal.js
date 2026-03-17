"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPersonal = isPersonal;
function isPersonal(req, res, next) {
    const role = req.userRole;
    if (role === 'ADMIN' || role === 'PERSONAL') {
        return next();
    }
    return res.status(403).json({ error: 'Acesso restrito a administradores e personal trainers.' });
}
//# sourceMappingURL=isPersonal.js.map