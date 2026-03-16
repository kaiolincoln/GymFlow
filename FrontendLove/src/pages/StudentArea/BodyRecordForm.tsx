import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export function BodyRecordForm({ studentId, onSaved }: { studentId: string; onSaved: () => void }) {
  const [form, setForm] = useState({ weight: "", height: "", bodyFat: "", notes: "" });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.post(`/students/${studentId}/body-records`, {
        weight: form.weight ? Number(form.weight) : undefined,
        height: form.height ? Number(form.height) : undefined,
        bodyFat: form.bodyFat ? Number(form.bodyFat) : undefined,
        notes: form.notes || undefined,
      });
      toast.success("Medidas registradas!");
      setForm({ weight: "", height: "", bodyFat: "", notes: "" });
      onSaved();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="glass-card p-5 space-y-4">
      <h3 className="font-display font-semibold flex items-center gap-2">
        <Plus className="h-4 w-4 text-primary" /> Registrar Medidas
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">Peso (kg)</Label>
          <Input
            type="number"
            placeholder="75.5"
            value={form.weight}
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Altura (m)</Label>
          <Input
            type="number"
            placeholder="1.78"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">% Gordura</Label>
          <Input
            type="number"
            placeholder="18.5"
            value={form.bodyFat}
            onChange={(e) => setForm({ ...form, bodyFat: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Observações</Label>
          <Input
            placeholder="Opcional"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>
      </div>
      <Button variant="glow" size="sm" onClick={handleSave} disabled={saving}>
        {saving ? "Salvando..." : "Salvar Medidas"}
      </Button>
    </div>
  );
}