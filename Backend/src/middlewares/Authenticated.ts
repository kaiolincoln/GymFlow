import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  sub: string
  role: string
}

declare global {
  namespace Express {
    interface Request {
      userId: string
      userRole: string
    }
  }
}

export function Authenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado.' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, process.env.JWT_SECRET as string) as TokenPayload

    req.userId = decoded.sub
    req.userRole = decoded.role

    return next()
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado.' })
  }
}