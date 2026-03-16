import "dotenv/config";
import { PrismaClient } from "../../generated/prisma"
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString })

declare global {
  var prisma: PrismaClient | undefined
}

const prismaClient = globalThis.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismaClient

export default prismaClient