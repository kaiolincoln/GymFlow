import { Request, Response } from 'express'
import { chatService } from '../../services/Chat/ChatService'
import prismaClient from '../../prisma/index'
 
export class ChatController {
  async stream(req: Request, res: Response) {
    const { studentId } = req.params
 
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.flushHeaders()
 
    const history = chatService.getMessages(studentId as string)
    if (history.length > 0) {
      res.write(`data: ${JSON.stringify({ type: 'history', messages: history })}\n\n`)
    }
 
    chatService.addClient(studentId as string, res)
 
    const heartbeat = setInterval(() => {
      try { res.write(': heartbeat\n\n') } catch { clearInterval(heartbeat) }
    }, 30000)
 
    req.on('close', () => {
      clearInterval(heartbeat)
      chatService.removeClient(studentId as string, res)
    })
  }
 
  async sendMessage(req: Request, res: Response) {
    const { studentId } = req.params
    const { content } = req.body
 
    if (!content?.trim()) {
      return res.status(400).json({ error: 'Mensagem não pode ser vazia.' })
    }
 
    const user = await prismaClient.user.findUnique({
      where: { id: req.userId },
      select: { name: true, role: true },
    })
 
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' })
 
    const message = chatService.sendMessage({
      roomId: studentId as string,
      senderId: req.userId,
      senderName: user.name,
      senderRole: user.role,
      content: content.trim(),
    })
 
    return res.status(201).json(message)
  }

  async getMessages(req: Request, res: Response) {
    const { studentId } = req.params
    const messages = chatService.getMessages(studentId as string)
    return res.json(messages)
  }
}