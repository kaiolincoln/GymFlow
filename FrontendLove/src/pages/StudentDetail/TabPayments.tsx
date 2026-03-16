import { Button } from "@/components/ui/button";
import { Plus, CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Payment } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TabPaymentsProps {
  payments: Payment[] | undefined;
  paymentDialog: boolean;
  setPaymentDialog: (v: boolean) => void;
  paymentData: { amount: string; dueDate: string; note: string };
  setPaymentData: (d: { amount: string; dueDate: string; note: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
  onMarkPayment: (paymentId: string, status: "PAID" | "OVERDUE") => void;
}

export function TabPayments({
  payments,
  paymentDialog,
  setPaymentDialog,
  paymentData,
  setPaymentData,
  onSubmit,
  onMarkPayment,
}: TabPaymentsProps) {
  return (
    <div>
      <div className="mb-4">
        <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
          <DialogTrigger asChild>
            <Button variant="glow" size="sm">
              <Plus className="h-4 w-4 mr-1" /> Novo Pagamento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Registrar Pagamento</DialogTitle></DialogHeader>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Valor (R$)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={paymentData.amount}
                  onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Vencimento</Label>
                <Input
                  type="date"
                  value={paymentData.dueDate}
                  onChange={(e) => setPaymentData({ ...paymentData, dueDate: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Observação <span className="text-muted-foreground text-xs">(opcional)</span></Label>
                <Input
                  value={paymentData.note}
                  onChange={(e) => setPaymentData({ ...paymentData, note: e.target.value })}
                />
              </div>
              <Button type="submit" variant="glow" className="w-full">Registrar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {payments?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
            <CreditCard className="h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground text-sm">Nenhum pagamento registrado.</p>
          </div>
        )}
        {payments
          ?.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
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
                {p.note && <p className="text-xs text-muted-foreground mt-0.5">{p.note}</p>}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={
                  p.status === "PAID" ? "default" :
                  p.status === "OVERDUE" ? "destructive" : "secondary"
                }>
                  {p.status === "PAID" ? "✓ Pago" : p.status === "OVERDUE" ? "Vencido" : "Pendente"}
                </Badge>
                {p.status === "PENDING" && (
                  <>
                    <Button size="sm" variant="ghost" onClick={() => onMarkPayment(p.id, "PAID")}>Pagar</Button>
                    <Button size="sm" variant="ghost" onClick={() => onMarkPayment(p.id, "OVERDUE")}>Vencer</Button>
                  </>
                )}
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}