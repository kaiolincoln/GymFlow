import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Save, Lock } from "lucide-react";

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [saving, setSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changingPw, setChangingPw] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const updated = await api.put<any>("/me", { name, email });
      updateUser({ ...user!, name: updated.name || name, email: updated.email || email });
      toast.success("Perfil atualizado!");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setChangingPw(true);
    try {
      await api.patch("/me/password", { currentPassword, newPassword });
      toast.success("Senha alterada!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setChangingPw(false);
    }
  };

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Perfil</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold">Dados Pessoais</h2>
          <div className="space-y-2">
            <Label>Nome</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <Input value={user?.role || ""} disabled />
          </div>
          <Button variant="glow" onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" /> {saving ? "Salvando..." : "Salvar"}
          </Button>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold">Alterar Senha</h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="space-y-2">
              <Label>Senha Atual</Label>
              <Input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Nova Senha</Label>
              <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <Button type="submit" variant="outline" disabled={changingPw}>
              <Lock className="h-4 w-4 mr-2" /> {changingPw ? "Alterando..." : "Alterar Senha"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
