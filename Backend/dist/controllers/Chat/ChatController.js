"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const ChatService_1 = require("../../services/Chat/ChatService");
const index_1 = __importDefault(require("../../prisma/index"));
class ChatController {
    async stream(req, res) {
        const { studentId } = req.params;
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.flushHeaders();
        const history = ChatService_1.chatService.getMessages(studentId);
        if (history.length > 0) {
            res.write(`data: ${JSON.stringify({ type: 'history', messages: history })}\n\n`);
        }
        ChatService_1.chatService.addClient(studentId, res);
        const heartbeat = setInterval(() => {
            try {
                res.write(': heartbeat\n\n');
            }
            catch {
                clearInterval(heartbeat);
            }
        }, 30000);
        req.on('close', () => {
            clearInterval(heartbeat);
            ChatService_1.chatService.removeClient(studentId, res);
        });
    }
    async sendMessage(req, res) {
        const { studentId } = req.params;
        const { content } = req.body;
        if (!content?.trim()) {
            return res.status(400).json({ error: 'Mensagem não pode ser vazia.' });
        }
        const user = await index_1.default.user.findUnique({
            where: { id: req.userId },
            select: { name: true, role: true },
        });
        if (!user)
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        const message = ChatService_1.chatService.sendMessage({
            roomId: studentId,
            senderId: req.userId,
            senderName: user.name,
            senderRole: user.role,
            content: content.trim(),
        });
        return res.status(201).json(message);
    }
    async getMessages(req, res) {
        const { studentId } = req.params;
        const messages = ChatService_1.chatService.getMessages(studentId);
        return res.json(messages);
    }
}
exports.ChatController = ChatController;
//# sourceMappingURL=ChatController.js.map