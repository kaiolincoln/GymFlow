import { Save, Phone, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Student } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TabInfoProps {
  student: Student;
  editData: { phone: string; goal: string; plan: string; status: string };
  setEditData: (d: { phone: string; goal: string; plan: string; status: string }) => void;
  onSave: () => void;
  saving: boolean;
}

export function TabInfo({ student, editData, setEditData, onSave, saving }: TabInfoProps) {
  return (
    <div className="glass-card p-6 max-w-lg space-y-4">
      <div className="space-y-2">
        <Label className="flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5 text-muted-foreground" /> Telefone
        </Label>
        <Input
          value={editData.phone}
          onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
          placeholder="(11) 99999-9999"
        />
      </div>
      <div className="space-y-2">
        <Label className="flex items-center gap-1.5">
          <Target className="h-3.5 w-3.5 text-muted-foreground" /> Objetivo
        </Label>
        <Input
          value={editData.goal}
          onChange={(e) => setEditData({ ...editData, goal: e.target.value })}
          placeholder="Ex: Hipertrofia, emagrecimento..."
        />
      </div>
      {student.birthDate && (
        <div className="space-y-2">
          <Label className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" /> Data de Nascimento
          </Label>
          <p className="text-sm text-muted-foreground">
            {new Date(student.birthDate).toLocaleDateString("pt-BR")}
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Plano</Label>
          <Select value={editData.plan} onValueChange={(v) => setEditData({ ...editData, plan: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="MONTHLY">Mensal</SelectItem>
              <SelectItem value="QUARTERLY">Trimestral</SelectItem>
              <SelectItem value="SEMIANNUAL">Semestral</SelectItem>
              <SelectItem value="ANNUAL">Anual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Status</Label>
          <Select value={editData.status} onValueChange={(v) => setEditData({ ...editData, status: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ACTIVE">Ativo</SelectItem>
              <SelectItem value="INACTIVE">Inativo</SelectItem>
              <SelectItem value="OVERDUE">Inadimplente</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button variant="glow" onClick={onSave} disabled={saving}>
        <Save className="h-4 w-4 mr-2" /> {saving ? "Salvando..." : "Salvar Alterações"}
      </Button>
    </div>
  );
}