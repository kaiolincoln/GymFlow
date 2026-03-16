import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Payment } from "@/lib/types";

export function TabPayments({ payments }: { payments: Payment[] }) {
  if (payments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
        <CreditCard className="h-12 w-12 text-muted-foreground/30" />
        <p className="text-muted-foreground">Nenhum pagamento registrado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {payments
        .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
        .map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">
                R$ {Number(p.amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-muted-foreground">
                Venc.: {new Date(p.dueDate).toLocaleDateString("pt-BR")}
                {p.paidAt && ` · Pago em ${new Date(p.paidAt).toLocaleDateString("pt-BR")}`}
              </p>
            </div>
            <Badge
              variant={
                p.status === "PAID" ? "default" :
                p.status === "OVERDUE" ? "destructive" : "secondary"
              }
            >
              {p.status === "PAID" ? "✓ Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
            </Badge>
          </motion.div>
        ))}
    </div>
  );
}