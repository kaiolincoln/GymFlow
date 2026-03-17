import { Request, Response } from 'express';
export declare class ChatController {
    stream(req: Request, res: Response): Promise<void>;
    sendMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=ChatController.d.ts.map