'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus, Search, X } from 'lucide-react'
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

const muscleGroupMap: Record<string, string> = {
  'peito':       'chest',
  'costas':      'back',
  'ombros':      'shoulders',
  'biceps':      'upper arms',
  'bíceps':      'upper arms',
  'triceps':     'upper arms',
  'tríceps':     'upper arms',
  'pernas':      'upper legs',
  'abdomen':     'waist',
  'abdômen':     'waist',
  'gluteos':     'glutes',
  'glúteos':     'glutes',
  'panturrilha': 'lower legs',
  'antebraço':   'lower arms',
}

function translateToEnglish(term: string): string {
  const lower = term.toLowerCase()
  for (const [pt, en] of Object.entries(muscleGroupMap)) {
    if (lower.includes(pt)) return en
  }
  return term
}

async function searchGifs(query: string): Promise<any[]> {
  if (!query || query.length < 2) return []
  const translated = translateToEnglish(query)
  const key = process.env.NEXT_PUBLIC_RAPIDAPI_KEY!

  // Tenta por nome
  const byName = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(translated)}?limit=10`,
    { headers: { 'X-RapidAPI-Key': key, 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' } }
  )
  const nameData = await byName.json()
  if (Array.isArray(nameData) && nameData.length > 0) return nameData

  // Fallback por bodyPart
  const byPart = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${encodeURIComponent(translated)}?limit=10`,
    { headers: { 'X-RapidAPI-Key': key, 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' } }
  )
  const partData = await byPart.json()
  return Array.isArray(partData) ? partData : []
}

const createExerciseSchema = z.object({
  name:        z.string().min(2, 'Nome obrigatório'),
  muscleGroup: z.string().min(2, 'Grupo muscular obrigatório'),
  description: z.string().optional(),
  gifUrl:      z.string().optional(),
})

type CreateExerciseForm = z.infer<typeof createExerciseSchema>

const muscleGroups = [
  'Peito', 'Costas', 'Ombros', 'Bíceps',
  'Tríceps', 'Pernas', 'Abdômen', 'Glúteos', 'Panturrilha'
]

export default function ExercisesPage() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [gifSearch, setGifSearch] = useState('')
  const [gifResults, setGifResults] = useState<any[]>([])
  const [selectedGif, setSelectedGif] = useState<string | null>(null)
  const [isSearchingGif, setIsSearchingGif] = useState(false)
  const queryClient = useQueryClient()

  const { data: exercises, isLoading } = useQuery({
    queryKey: ['exercises', search],
    queryFn: () => exercisesService.list({ search }),
  })

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<CreateExerciseForm>({
    resolver: zodResolver(createExerciseSchema),
  })

  const { mutate: createExercise, isPending } = useMutation({
    mutationFn: exercisesService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercises'] })
      reset()
      setSelectedGif(null)
      setGifResults([])
      setGifSearch('')
      setOpen(false)
    },
  })

  async function handleGifSearch() {
    if (!gifSearch) return
    setIsSearchingGif(true)
    const results = await searchGifs(gifSearch)
    setGifResults(results)
    setIsSearchingGif(false)
  }

  function handleSelectGif(gifUrl: string) {
    setSelectedGif(gifUrl)
    setValue('gifUrl', gifUrl)
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
            <Card key={i} className="animate-pulse"><CardContent className="h-20" /></Card>
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
                {exercise.gifUrl ? (
                  <img src={exercise.gifUrl} alt={exercise.name} className="w-16 h-16 rounded-lg object-cover" />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs text-center">
                    Sem GIF
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{exercise.name}</p>
                  <Badge variant="outline" className="mt-1 text-xs" style={{ borderColor: '#F97316', color: '#F97316' }}>
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
            <div className="col-span-3 p-8 text-center text-muted-foreground">Nenhum exercício encontrado.</div>
          )}
        </div>
      )}

      {/* Modal detalhe */}
      <Dialog open={!!selectedExercise} onOpenChange={() => setSelectedExercise(null)}>
        {selectedExercise && (
          <DialogContent className="max-w-sm bg-white">
            <DialogHeader>
              <DialogTitle className="text-gray-900">{selectedExercise.name}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4">
              {selectedExercise.gifUrl ? (
                <img src={selectedExercise.gifUrl} alt={selectedExercise.name} className="w-48 h-48 rounded-xl object-cover" />
              ) : (
                <div className="w-48 h-48 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                  Sem GIF
                </div>
              )}
              <div className="w-full space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Grupo muscular:</span>
                  <Badge style={{ backgroundColor: '#F97316', color: 'white' }}>{selectedExercise.muscleGroup}</Badge>
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
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { reset(); setSelectedGif(null); setGifResults([]) } }}>
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Novo Exercício</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit((d) => createExercise({ ...d, gifUrl: selectedGif ?? undefined }))} className="space-y-4">

            <div className="space-y-1.5">
              <Label className="text-gray-700 font-semibold">Nome</Label>
              <Input placeholder="Ex: Supino Reto" {...register('name')} className="border-gray-300" />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label className="text-gray-700 font-semibold">Grupo Muscular</Label>
              <Input placeholder="Ex: Peito" list="muscle-groups" {...register('muscleGroup')} className="border-gray-300" />
              <datalist id="muscle-groups">
                {muscleGroups.map((g) => <option key={g} value={g} />)}
              </datalist>
              {errors.muscleGroup && <p className="text-xs text-red-500">{errors.muscleGroup.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label className="text-gray-700 font-semibold">Descrição <span className="font-normal text-gray-400">(opcional)</span></Label>
              <Input placeholder="Ex: Exercício para peitoral com barra" {...register('description')} className="border-gray-300" />
            </div>

            {/* Seletor de GIF */}
            <div className="space-y-2 border-t pt-3">
              <Label className="text-gray-700 font-semibold">GIF do exercício</Label>

              {selectedGif && (
                <div className="relative w-fit">
                  <img src={selectedGif} alt="GIF selecionado" className="w-24 h-24 rounded-lg object-cover border-2 border-orange-400" />
                  <button
                    type="button"
                    onClick={() => { setSelectedGif(null); setValue('gifUrl', '') }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}

              <div className="flex gap-2">
                <Input
                  placeholder="Buscar GIF (ex: supino, agachamento...)"
                  value={gifSearch}
                  onChange={(e) => setGifSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleGifSearch())}
                  className="border-gray-300"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGifSearch}
                  disabled={isSearchingGif}
                  className="shrink-0"
                >
                  {isSearchingGif ? '...' : 'Buscar'}
                </Button>
              </div>

              {gifResults.length > 0 && (
                <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                  {gifResults.map((ex) => (
                    <button
                      key={ex.id}
                      type="button"
                      onClick={() => handleSelectGif(ex.gifUrl)}
                      className="rounded-lg overflow-hidden border-2 transition-all"
                      style={{ borderColor: selectedGif === ex.gifUrl ? '#F97316' : 'transparent' }}
                      title={ex.name}
                    >
                      <img src={ex.gifUrl} alt={ex.name} className="w-full h-16 object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {gifResults.length === 0 && gifSearch && !isSearchingGif && (
                <p className="text-xs text-muted-foreground">Nenhum GIF encontrado. Tente outro termo.</p>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline" className="flex-1 border-gray-300" onClick={() => { reset(); setSelectedGif(null); setGifResults([]); setOpen(false) }}>
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