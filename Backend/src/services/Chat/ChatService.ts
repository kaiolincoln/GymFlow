import { Response } from 'express'
 
export interface ChatMessage {
  id: string
  roomId: string       
  senderId: string
  senderName: string
  senderRole: string
  content: string
  createdAt: string
}

const messages = new Map<string, ChatMessage[]>()

const clients = new Map<string, Set<Response>>()
 
export class ChatService {
  getMessages(roomId: string): ChatMessage[] {
    return messages.get(roomId) ?? []
  }
 
  sendMessage(msg: Omit<ChatMessage, 'id' | 'createdAt'>): ChatMessage {
    const message: ChatMessage = {
      ...msg,
      id: Math.random().toString(36).slice(2),
      createdAt: new Date().toISOString(),
    }
 
    const roomMessages = messages.get(msg.roomId) ?? []
    roomMessages.push(message)
    if (roomMessages.length > 100) roomMessages.shift()
    messages.set(msg.roomId, roomMessages)

    this.broadcast(msg.roomId, message)
 
    return message
  }
 
  addClient(roomId: string, res: Response) {
    if (!clients.has(roomId)) clients.set(roomId, new Set())
    clients.get(roomId)!.add(res)
  }
 
  removeClient(roomId: string, res: Response) {
    clients.get(roomId)?.delete(res)
  }
 
  private broadcast(roomId: string, message: ChatMessage) {
    const roomClients = clients.get(roomId)
    if (!roomClients) return
    const data = `data: ${JSON.stringify(message)}\n\n`
    roomClients.forEach((client) => {
      try { client.write(data) } catch { roomClients.delete(client) }
    })
  }
}
 

export const chatService = new ChatService()