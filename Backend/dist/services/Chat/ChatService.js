"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatService = exports.ChatService = void 0;
const messages = new Map();
const clients = new Map();
class ChatService {
    getMessages(roomId) {
        return messages.get(roomId) ?? [];
    }
    sendMessage(msg) {
        const message = {
            ...msg,
            id: Math.random().toString(36).slice(2),
            createdAt: new Date().toISOString(),
        };
        const roomMessages = messages.get(msg.roomId) ?? [];
        roomMessages.push(message);
        if (roomMessages.length > 100)
            roomMessages.shift();
        messages.set(msg.roomId, roomMessages);
        this.broadcast(msg.roomId, message);
        return message;
    }
    addClient(roomId, res) {
        if (!clients.has(roomId))
            clients.set(roomId, new Set());
        clients.get(roomId).add(res);
    }
    removeClient(roomId, res) {
        clients.get(roomId)?.delete(res);
    }
    broadcast(roomId, message) {
        const roomClients = clients.get(roomId);
        if (!roomClients)
            return;
        const data = `data: ${JSON.stringify(message)}\n\n`;
        roomClients.forEach((client) => {
            try {
                client.write(data);
            }
            catch {
                roomClients.delete(client);
            }
        });
    }
}
exports.ChatService = ChatService;
exports.chatService = new ChatService();
//# sourceMappingURL=ChatService.js.map