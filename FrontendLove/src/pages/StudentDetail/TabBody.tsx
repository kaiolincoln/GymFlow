import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BodyTooltip } from "./BodyTooltip";
import { BodyRecord } from "@/lib/types";
import { motion } from "framer-motion";

interface TabBodyProps {
  bodyRecords: BodyRecord[];
  chartData: { date: string; weight?: number; bodyFat?: number }[];
  lastRecord: BodyRecord | null;
  bodyDialog: boolean;
  setBodyDialog: (v: boolean) => void;
  bodyForm: { weight: string; height: string; bodyFat: string; notes: string };
  setBodyForm: (f: { weight: string; height: string; bodyFat: string; notes: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
  savingBody: boolean;
}

export function TabBody({
  bodyRecords,
  chartData,
  lastRecord,
  bodyDialog,
  setBodyDialog,
  bodyForm,
  setBodyForm,
  onSubmit,
  savingBody,
}: TabBodyProps) {
  return (
    <div className="space-y-6">
      {/* Cards de última medida */}
      {lastRecord && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {lastRecord.weight && (
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Peso atual</p>
              <p className="font-display text-2xl font-bold">
                {Number(lastRecord.weight).toFixed(1)}
                <span className="text-sm text-muted-foreground ml-1">kg</span>
              </p>
            </div>
          )}
          {lastRecord.height && (
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Altura</p>
              <p className="font-display text-2xl font-bold">
                {Number(lastRecord.height).toFixed(2)}
                <span className="text-sm text-muted-foreground ml-1">m</span>
              </p>
            </div>
          )}
          {lastRecord.bodyFat && (
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">% Gordura</p>
              <p className="font-display text-2xl font-bold">
                {Number(lastRecord.bodyFat).toFixed(1)}
                <span className="text-sm text-muted-foreground ml-1">%</span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Gráfico */}
      {chartData.length > 1 ? (
        <div className="glass-card p-5">
          <h3 className="font-display font-semibold mb-4">Evolução ao longo do tempo</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} width={35} />
              <Tooltip content={<BodyTooltip />} />
              <Legend formatter={(v) => v === "weight" ? "Peso (kg)" : "% Gordura"} />
              <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} connectNulls />
              <Line type="monotone" dataKey="bodyFat" stroke="hsl(var(--warning))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} connectNulls />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
          <TrendingUp className="h-12 w-12 text-muted-foreground/30" />
          <p className="font-display font-semibold text-muted-foreground">
            {chartData.length === 0 ? "Nenhuma medida registrada" : "Registre mais medidas para ver o gráfico"}
          </p>
        </div>
      )}

      {/* Botão registrar medidas */}
      <Dialog open={bodyDialog} onOpenChange={setBodyDialog}>
        <DialogTrigger asChild>
          <Button variant="glow" size="sm">
            <Plus className="h-4 w-4 mr-1" /> Registrar Medidas
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Registrar Medidas Corporais</DialogTitle></DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Peso (kg)</Label>
                <Input type="number" step="0.1" placeholder="75.5" value={bodyForm.weight} onChange={(e) => setBodyForm({ ...bodyForm, weight: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Altura (m)</Label>
                <Input type="number" step="0.01" placeholder="1.78" value={bodyForm.height} onChange={(e) => setBodyForm({ ...bodyForm, height: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>% Gordura</Label>
                <Input type="number" step="0.1" placeholder="18.5" value={bodyForm.bodyFat} onChange={(e) => setBodyForm({ ...bodyForm, bodyFat: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Observações</Label>
                <Input placeholder="Opcional" value={bodyForm.notes} onChange={(e) => setBodyForm({ ...bodyForm, notes: e.target.value })} />
              </div>
            </div>
            <Button type="submit" variant="glow" className="w-full" disabled={savingBody}>
              {savingBody ? "Salvando..." : "Salvar Medidas"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Histórico de medidas */}
      {bodyRecords.length > 0 && (
        <div>
          <h3 className="font-display font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wider">
            Histórico
          </h3>
          <div className="space-y-2">
            {[...bodyRecords]
              .sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime())
              .map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="glass-card p-3 flex items-center justify-between"
                >
                  <p className="text-xs text-muted-foreground">
                    {new Date(r.recordedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                  </p>
                  <div className="flex gap-4 text-sm">
                    {r.weight && <span>{Number(r.weight).toFixed(1)} kg</span>}
                    {r.bodyFat && <span className="text-warning">{Number(r.bodyFat).toFixed(1)}%</span>}
                    {r.height && <span className="text-muted-foreground">{Number(r.height).toFixed(2)} m</span>}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}