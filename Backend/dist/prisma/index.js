"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_1 = require("../../generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prismaClient = globalThis.prisma ?? new prisma_1.PrismaClient({ adapter });
if (process.env.NODE_ENV !== 'production')
    globalThis.prisma = prismaClient;
exports.default = prismaClient;
//# sourceMappingURL=index.js.map