import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import { routes } from './Routes'

export const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: 'Muitas requisições, tente novamente mais tarde.' },
  })
)

app.use(routes)

app.use((_req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' })
})