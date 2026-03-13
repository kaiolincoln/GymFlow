import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Exercise } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";

export default function Exercises() {
  const { user } = useAuth();
  const isAdmin = user?.role === "ADMIN";
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", muscleGroup: "", description: "", gifUrl: "" });

  const fetch = () => {
    const params = search ? `?search=${encodeURIComponent(search)}` : "";
    api.get<Exercise[]>(`/exercises${params}`)
      .then(setExercises)
      .catch(() => toast.error("Erro ao carregar exercícios"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetch(); }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/exercises/${editId}`, formData);
        toast.success("Exercício atualizado!");
      } else {
        await api.post("/exercises", formData);
        toast.success("Exercício criado!");
      }
      setDialogOpen(false);
      setEditId(null);
      setFormData({ name: "", muscleGroup: "", description: "", gifUrl: "" });
      fetch();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleEdit = (ex: Exercise) => {
    setEditId(ex.id);
    setFormData({ name: ex.name, muscleGroup: ex.muscleGroup, description: ex.description || "", gifUrl: ex.gifUrl || "" });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir exercício?")) return;
    try {
      await api.delete(`/exercises/${id}`);
      toast.success("Exercício excluído!");
      fetch();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Exercícios</h1>
        {isAdmin && (
          <Dialog open={dialogOpen} onOpenChange={(v) => { setDialogOpen(v); if (!v) { setEditId(null); setFormData({ name: "", muscleGroup: "", description: "", gifUrl: "" }); } }}>
            <DialogTrigger asChild>
              <Button variant="glow"><Plus className="h-4 w-4 mr-2" /> Novo Exercício</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>{editId ? "Editar" : "Novo"} Exercício</DialogTitle></DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2"><Label>Nome</Label><Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
                <div className="space-y-2"><Label>Grupo Muscular</Label><Input value={formData.muscleGroup} onChange={(e) => setFormData({ ...formData, muscleGroup: e.target.value })} required /></div>
                <div className="space-y-2"><Label>Descrição</Label><Input value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} /></div>
                <div className="space-y-2"><Label>URL do GIF</Label><Input value={formData.gifUrl} onChange={(e) => setFormData({ ...formData, gifUrl: e.target.value })} /></div>
                <Button type="submit" variant="glow" className="w-full">{editId ? "Salvar" : "Criar"}</Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar por nome ou grupo muscular..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => <div key={i} className="glass-card h-40 animate-pulse" />)}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((ex, i) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 flex flex-col"
            >
              {ex.gifUrl && (
                <img src={ex.gifUrl} alt={ex.name} className="h-32 w-full object-cover rounded-lg mb-3" />
              )}
              <h3 className="font-display font-semibold text-lg">{ex.name}</h3>
              <p className="text-sm text-primary mb-1">{ex.muscleGroup}</p>
              {ex.description && <p className="text-xs text-muted-foreground flex-1">{ex.description}</p>}
              {isAdmin && (
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(ex)}><Pencil className="h-3 w-3 mr-1" />Editar</Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(ex.id)}><Trash2 className="h-3 w-3 mr-1" />Excluir</Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
