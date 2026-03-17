import { Response } from 'express';
export interface ChatMessage {
    id: string;
    roomId: string;
    senderId: string;
    senderName: string;
    senderRole: string;
    content: string;
    createdAt: string;
}
export declare class ChatService {
    getMessages(roomId: string): ChatMessage[];
    sendMessage(msg: Omit<ChatMessage, 'id' | 'createdAt'>): ChatMessage;
    addClient(roomId: string, res: Response): void;
    removeClient(roomId: string, res: Response): void;
    private broadcast;
}
export declare const chatService: ChatService;
//# sourceMappingURL=ChatService.d.ts.map