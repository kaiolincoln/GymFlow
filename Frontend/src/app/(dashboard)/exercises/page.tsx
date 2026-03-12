'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus, Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { exercisesService } from '@/services/exercises.service'
import { Exercise } from '@/types'

const createExerciseSchema = z.object({
  name:        z.string().min(2, 'Nome obrigatório'),
  muscleGroup: z.string().min(2, 'Grupo muscular obrigatório'),
  description: z.string().optional(),
})

type CreateExerciseForm = z.infer<typeof createExerciseSchema>

const muscleGroups = [
  'Peito', 'Costas', 'Ombros', 'Bíceps',
  'Tríceps', 'Pernas', 'Abdômen', 'Glúteos', 'Panturrilha'
]

export default function ExercisesPage() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const { data: exercises, isLoading } = useQuery({
    queryKey: ['exercises', search],
    queryFn: () => exercisesService.list({ search }),
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateExerciseForm>({
    resolver: zodResolver(createExerciseSchema),
  })

  const { mutate: createExercise, isPending } = useMutation({
    mutationFn: exercisesService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercises'] })
      reset()
      setOpen(false)
    },
  })

  function onSubmit(data: CreateExerciseForm) {
    createExercise(data)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Exercícios</h1>
        <Button onClick={() => setOpen(true)} style={{ backgroundColor: '#F97316' }}>
          <Plus size={16} className="mr-2" />
          Novo Exercício
        </Button>
      </div>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar exercício..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="h-16" />
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm text-muted-foreground">
                  <th className="text-left p-4">Nome</th>
                  <th className="text-left p-4">Grupo Muscular</th>
                  <th className="text-left p-4">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {exercises?.map((exercise: Exercise) => (
                  <tr key={exercise.id} className="border-b last:border-0 hover:bg-muted/40 transition-colors">
                    <td className="p-4 font-medium">{exercise.name}</td>
                    <td className="p-4">
                      <Badge variant="outline" style={{ borderColor: '#F97316', color: '#F97316' }}>
                        {exercise.muscleGroup}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{exercise.description ?? '—'}</td>
                  </tr>
                ))}
                {exercises?.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-muted-foreground">
                      Nenhum exercício encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {/* Modal Novo Exercício */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Novo Exercício</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label>Nome</Label>
              <Input placeholder="Ex: Supino Reto" {...register('name')} />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label>Grupo Muscular</Label>
              <Input
                placeholder="Ex: Peito"
                list="muscle-groups"
                {...register('muscleGroup')}
              />
              <datalist id="muscle-groups">
                {muscleGroups.map((g) => <option key={g} value={g} />)}
              </datalist>
              {errors.muscleGroup && <p className="text-sm text-destructive">{errors.muscleGroup.message}</p>}
            </div>
            <div className="space-y-2">
              <Label>Descrição <span className="text-muted-foreground">(opcional)</span></Label>
              <Input placeholder="Ex: Exercício para peitoral com barra" {...register('description')} />
            </div>
            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="flex-1" style={{ backgroundColor: '#F97316' }} disabled={isPending}>
                {isPending ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}