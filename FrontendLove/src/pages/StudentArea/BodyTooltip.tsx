export const BodyTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 text-xs space-y-1">
          <p className="font-semibold text-foreground mb-1">{label}</p>
          {payload.map((p: any) => (
            <p key={p.name} style={{ color: p.color }}>
              {p.name === "weight" ? "Peso" : p.name === "bodyFat" ? "% Gordura" : p.name}: {p.value}
              {p.name === "weight" ? "kg" : p.name === "bodyFat" ? "%" : ""}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };