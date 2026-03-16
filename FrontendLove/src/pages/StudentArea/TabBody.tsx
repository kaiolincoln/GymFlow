import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend,
  } from "recharts";
  import { TrendingUp } from "lucide-react";
  import { BodyRecord } from "@/lib/types";
  import { BodyRecordForm } from "./BodyRecordForm";
  import { BodyTooltip } from "./BodyTooltip";
  
  interface TabBodyProps {
    bodyRecords: BodyRecord[];
    chartData: { date: string; weight?: number; bodyFat?: number }[];
    lastRecord: BodyRecord | null;
    studentId: string;
    onSaved: () => void;
  }
  
  export function TabBody({ bodyRecords, chartData, lastRecord, studentId, onSaved }: TabBodyProps) {
    return (
      <div className="space-y-6">
        {/* Cards de última medida */}
        {lastRecord && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
        ) : chartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
            <TrendingUp className="h-12 w-12 text-muted-foreground/30" />
            <p className="font-display font-semibold text-muted-foreground">Nenhuma medida registrada</p>
            <p className="text-sm text-muted-foreground">Registre suas medidas abaixo para ver a evolução.</p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            Registre mais medidas para ver o gráfico de evolução.
          </p>
        )}
  
        {/* Formulário */}
        <BodyRecordForm studentId={studentId} onSaved={onSaved} />
      </div>
    );
  }