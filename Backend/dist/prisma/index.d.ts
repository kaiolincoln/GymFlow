import "dotenv/config";
import { PrismaClient } from "../../generated/prisma";
declare global {
    var prisma: PrismaClient | undefined;
}
declare const prismaClient: PrismaClient<import("../../generated/prisma").Prisma.PrismaClientOptions, never, import("../../generated/prisma/runtime/client").DefaultArgs>;
export default prismaClient;
//# sourceMappingURL=index.d.ts.map