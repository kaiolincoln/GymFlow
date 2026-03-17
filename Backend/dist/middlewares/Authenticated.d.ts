import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            userId: string;
            userRole: string;
        }
    }
}
export declare function Authenticated(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
//# sourceMappingURL=Authenticated.d.ts.map