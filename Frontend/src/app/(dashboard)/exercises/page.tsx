'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus, Search, Play } from 'lucide-react'
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

// Mapeia grupo muscular PT → nome em inglês para a ExerciseDB
const muscleGroupMap: Record<string, string> = {
  'Peito':       'chest',
  'Costas':      'back',
  'Ombros':      'shoulders',
  'Bíceps':      'upper arms',
  'Tríceps':     'upper arms',
  'Pernas':      'upper legs',
  'Abdômen':     'waist',
  'Glúteos':     'glutes',
  'Panturrilha': 'lower legs',
}

async function fetchExerciseGif(exerciseName: string, muscleGroup: string): Promise<string | null> {
  try {
    const bodyPart = muscleGroupMap[muscleGroup] ?? 'chest'
    const res = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${encodeURIComponent(bodyPart)}?limit=100`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      }
    )
    const data = await res.json()
    const normalized = exerciseName.toLowerCase()
    const match = data.find((ex: any) =>
      ex.name.toLowerCase().includes(normalized) ||
      normalized.includes(ex.name.toLowerCase().split(' ')[0])
    )
    return match?.gifUrl ?? data[0]?.gifUrl ?? null
  } catch {
    return null
  }
}

function ExerciseGif({ name, muscleGroup }: { name: string; muscleGroup: string }) {
  const { data: gifUrl, isLoading } = useQuery({
    queryKey: ['exercise-gif', name, muscleGroup],
    queryFn: () => fetchExerciseGif(name, muscleGroup),
    staleTime: 1000 * 60 * 60, // cache 1 hora
  })

  if (isLoading) {
    return (
      <div className="w-16 h-16 rounded-lg bg-muted animate-pulse flex items-center justify-center">
        <Play size={16} className="text-muted-foreground" />
      </div>
    )
  }

  if (!gifUrl) {
    return (
      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
        <Play size={16} className="text-muted-foreground" />
      </div>
    )
  }

  return (
    <img
      src={gifUrl}
      alt={name}
      className="w-16 h-16 rounded-lg object-cover"
    />
  )
}

export default function ExercisesPage() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
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
              <CardContent className="h-20" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {exercises?.map((exercise: Exercise) => (
            <Card
              key={exercise.id}
              className="cursor-pointer hover:shadow-md transition-all hover:border-orange-300"
              onClick={() => setSelectedExercise(exercise)}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <ExerciseGif name={exercise.name} muscleGroup={exercise.muscleGroup} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{exercise.name}</p>
                  <Badge
                    variant="outline"
                    className="mt-1 text-xs"
                    style={{ borderColor: '#F97316', color: '#F97316' }}
                  >
                    {exercise.muscleGroup}
                  </Badge>
                  {exercise.description && (
                    <p className="text-xs text-muted-foreground mt-1 truncate">{exercise.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          {exercises?.length === 0 && (
            <div className="col-span-3 p-8 text-center text-muted-foreground">
              Nenhum exercício encontrado.
            </div>
          )}
        </div>
      )}

      {/* Modal detalhe do exercício com GIF grande */}
      <Dialog open={!!selectedExercise} onOpenChange={() => setSelectedExercise(null)}>
        {selectedExercise && (
          <DialogContent className="max-w-sm bg-white">
            <DialogHeader>
              <DialogTitle className="text-gray-900">{selectedExercise.name}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4">
              <ExerciseGif name={selectedExercise.name} muscleGroup={selectedExercise.muscleGroup} />
              <div className="w-full space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Grupo muscular:</span>
                  <Badge style={{ backgroundColor: '#F97316', color: 'white' }}>
                    {selectedExercise.muscleGroup}
                  </Badge>
                </div>
                {selectedExercise.description && (
                  <p className="text-sm text-gray-700">{selectedExercise.description}</p>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Modal Novo Exercício */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Novo Exercício</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit((d) => createExercise(d))} className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-gray-700 font-semibold">Nome</Label>
              <Input placeholder="Ex: Supino Reto" {...register('name')} className="border-gray-300" />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label className="text-gray-700 font-semibold">Grupo Muscular</Label>
              <Input
                placeholder="Ex: Peito"
                list="muscle-groups"
                {...register('muscleGroup')}
                className="border-gray-300"
              />
              <datalist id="muscle-groups">
                {muscleGroups.map((g) => <option key={g} value={g} />)}
              </datalist>
              {errors.muscleGroup && <p className="text-xs text-red-500">{errors.muscleGroup.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label className="text-gray-700 font-semibold">
                Descrição <span className="text-gray-400 font-normal">(opcional)</span>
              </Label>
              <Input placeholder="Ex: Exercício para peitoral com barra" {...register('description')} className="border-gray-300" />
            </div>
            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline" className="flex-1 border-gray-300" onClick={() => { reset(); setOpen(false) }}>
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 text-white" style={{ backgroundColor: '#F97316' }} disabled={isPending}>
                {isPending ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}