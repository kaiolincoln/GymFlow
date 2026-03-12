import { Request, Response, NextFunction } from 'express'

export function isPersonal(req: Request, res: Response, next: NextFunction) {
  const role = req.userRole

  if (role === 'ADMIN' || role === 'PERSONAL') {
    return next()
  }

  return res.status(403).json({ error: 'Acesso restrito a administradores e personal trainers.' })
}