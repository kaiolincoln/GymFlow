'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, User, Phone, Target, CreditCard, Calendar, Dumbbell, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { studentsService } from '@/services/students.service'

const statusLabel: Record<string, { label: string; color: string }> = {
  ACTIVE:   { label: 'Ativo',        color: '#22C55E' },
  INACTIVE: { label: 'Inativo',      color: '#A1A1AA' },
  OVERDUE:  { label: 'Inadimplente', color: '#EF4444' },
}

const planLabel: Record<string, string> = {
  MONTHLY:    'Mensal',
  QUARTERLY:  'Trimestral',
  SEMIANNUAL: 'Semestral',
  ANNUAL:     'Anual',
}

const paymentStatusLabel: Record<string, { label: string; color: string }> = {
  PAID:    { label: 'Pago',     color: '#22C55E' },
  PENDING: { label: 'Pendente', color: '#EAB308' },
  OVERDUE: { label: 'Vencido',  color: '#EF4444' },
}

type Tab = 'info' | 'workouts' | 'payments'

export default function StudentDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>('info')

  const { data: student, isLoading } = useQuery({
    queryKey: ['student', id],
    queryFn: () => studentsService.getById(id as string),
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="h-24" />
          </Card>
        ))}
      </div>
    )
  }

  if (!student) return null

  const status = statusLabel[student.status]

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: 'info',     label: 'Informações', icon: User },
    { key: 'workouts', label: 'Fichas de Treino', icon: Dumbbell },
    { key: 'payments', label: 'Pagamentos', icon: DollarSign },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: '#F97316' }}
            >
              {student.user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{student.user.name}</h1>
              <p className="text-muted-foreground text-sm">{student.user.email}</p>
            </div>
          </div>
        </div>
        <Badge style={{ backgroundColor: status.color, color: 'white' }}>
          {status.label}
        </Badge>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px"
              style={{
                borderBottomColor: isActive ? '#F97316' : 'transparent',
                color: isActive ? '#F97316' : undefined,
              }}
            >
              <Icon size={15} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab: Informações */}
      {activeTab === 'info' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dados Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={15} className="text-muted-foreground" />
                <span className="text-muted-foreground">Telefone:</span>
                <span>{student.phone ?? '—'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={15} className="text-muted-foreground" />
                <span className="text-muted-foreground">Nascimento:</span>
                <span>
                  {student.birthDate
                    ? new Date(student.birthDate).toLocaleDateString('pt-BR')
                    : '—'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target size={15} className="text-muted-foreground" />
                <span className="text-muted-foreground">Objetivo:</span>
                <span>{student.goal ?? '—'}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Plano</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CreditCard size={15} className="text-muted-foreground" />
                <span className="text-muted-foreground">Plano atual:</span>
                <span className="font-medium">{planLabel[student.plan]}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={15} className="text-muted-foreground" />
                <span className="text-muted-foreground">Cadastrado em:</span>
                <span>{new Date(student.createdAt).toLocaleDateString('pt-BR')}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tab: Fichas de Treino */}
      {activeTab === 'workouts' && (
        <WorkoutsTab studentId={id as string} studentName={student.user.name} />
      )}

      {/* Tab: Pagamentos */}
      {activeTab === 'payments' && (
        <div>
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm text-muted-foreground">
                    <th className="text-left p-4">Valor</th>
                    <th className="text-left p-4">Vencimento</th>
                    <th className="text-left p-4">Pagamento</th>
                    <th className="text-left p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {student.payments.map((payment) => {
                    const ps = paymentStatusLabel[payment.status]
                    return (
                      <tr key={payment.id} className="border-b last:border-0 hover:bg-muted/40">
                        <td className="p-4 font-medium">R$ {Number(payment.amount).toFixed(2)}</td>
                        <td className="p-4 text-muted-foreground">
                          {new Date(payment.dueDate).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="p-4 text-muted-foreground">
                          {payment.paidAt ? new Date(payment.paidAt).toLocaleDateString('pt-BR') : '—'}
                        </td>
                        <td className="p-4">
                          <Badge style={{ backgroundColor: ps.color, color: 'white' }}>
                            {ps.label}
                          </Badge>
                        </td>
                      </tr>
                    )
                  })}
                  {student.payments.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-muted-foreground">
                        Nenhum pagamento registrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

// ─── Componente de Fichas de Treino ─────────────────────────
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { workoutPlansService } from '@/services/workoutPlans.service'
import { exercisesService } from '@/services/exercises.service'
import { Exercise } from '@/types'

const createPlanSchema = z.object({
  name:        z.string().min(2, 'Nome obrigatório'),
  description: z.string().optional(),
})

type CreatePlanForm = z.infer<typeof createPlanSchema>

interface ExerciseWithConfig extends Exercise {
  selected: boolean
  sets: number
  reps: string
  load: string
  rest: string
}

function WorkoutsTab({ studentId, studentName }: { studentId: string; studentName: string }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [planData, setPlanData] = useState<CreatePlanForm | null>(null)
  const [exercises, setExercises] = useState<ExerciseWithConfig[]>([])
  const [search, setSearch] = useState('')
  const queryClient = useQueryClient()

  const { data: student } = useQuery({
    queryKey: ['student', studentId],
    queryFn: () => studentsService.getById(studentId),
  })

  const { data: allExercises } = useQuery({
    queryKey: ['exercises', search],
    queryFn: () => exercisesService.list({ search }),
    enabled: open && step === 2,
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreatePlanForm>({
    resolver: zodResolver(createPlanSchema),
  })

  const { mutate: createPlan, isPending } = useMutation({
    mutationFn: (data: CreatePlanForm) =>
      workoutPlansService.create(studentId, {
        ...data,
        exercises: exercises
          .filter((e) => e.selected)
          .map((e, i) => ({
            exerciseId: e.id,
            sets: e.sets,
            reps: e.reps,
            load: e.load,
            rest: e.rest,
            order: i + 1,
          })),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['student', studentId] })
      reset()
      setOpen(false)
      setStep(1)
      setPlanData(null)
      setExercises([])
    },
  })

  function onStep1(data: CreatePlanForm) {
    setPlanData(data)
    setStep(2)
  }

  function toggleExercise(exercise: Exercise) {
    setExercises((prev) => {
      const exists = prev.find((e) => e.id === exercise.id)
      if (exists) {
        return prev.map((e) =>
          e.id === exercise.id ? { ...e, selected: !e.selected } : e
        )
      }
      return [...prev, { ...exercise, selected: true, sets: 3, reps: '10-12', load: '', rest: '60s' }]
    })
  }

  function updateExercise(id: string, field: string, value: string | number) {
    setExercises((prev) =>
      prev.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    )
  }

  const selectedExercises = exercises.filter((e) => e.selected)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Fichas de Treino</h2>
        <Button onClick={() => setOpen(true)} style={{ backgroundColor: '#F97316' }}>
          <Plus size={16} className="mr-2" />
          Nova Ficha
        </Button>
      </div>

      <div className="space-y-3">
        {student?.workoutPlans.map((plan) => (
          <Card key={plan.id} className={plan.active ? 'border-orange-400' : ''}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium">{plan.name}</p>
                {plan.description && (
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(plan.createdAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
              {plan.active && (
                <Badge style={{ backgroundColor: '#F97316', color: 'white' }}>
                  Ativa
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
        {student?.workoutPlans.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Nenhuma ficha criada ainda.
          </p>
        )}
      </div>

      {/* Modal Nova Ficha */}
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setStep(1); reset() } }}>
        <DialogContent
          className="max-w-lg border-0 shadow-2xl"
          style={{ backgroundColor: 'white', color: '#F5F5F5' }}
        >
          <DialogHeader className="pb-2 border-b border-white/10">
            <DialogTitle className="flex items-center gap-2 text-black">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F97316' }}>
                <Dumbbell size={14} color="white" />
              </div>
              {step === 1 ? 'Nova Ficha — Dados' : 'Nova Ficha — Exercícios'}
            </DialogTitle>
            <p className="text-xs text-black">
              Aluno: {studentName} — Passo {step} de 2
            </p>
          </DialogHeader>

          {/* Step 1 — Nome da ficha */}
          {step === 1 && (
            <form onSubmit={handleSubmit(onStep1)} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <Label className=" text-black text-sm font-semibold">Nome da ficha</Label>
                <Input
                  placeholder="Ex: Treino A — Peito e Tríceps"
                  {...register('name')}
                  className="border-white/20 text-black placeholder:text-black/40"
                  
                />
                {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label className="text-black text-sm font-semibold">
                  Descrição <span className="text-black">(opcional)</span>
                </Label>
                <Input
                  placeholder="Ex: Foco em hipertrofia"
                  {...register('description')}
                  className="border-white/20 text-black placeholder:text-black/40"
                  
                />
              </div>
              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-black/70 text-black hover:bg-white/10"
                  
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1 text-white" style={{ backgroundColor: '#F97316' }}>
                  Próximo →
                </Button>
              </div>
            </form>
          )}

          {/* Step 2 — Selecionar exercícios */}
          {step === 2 && (
            <div className="space-y-4 pt-2">
              <Input
                placeholder="Buscar exercício..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-white/20 text-black placeholder:text-black/30"
              />

              {/* Lista de exercícios */}
              <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                {allExercises?.map((exercise) => {
                  const isSelected = exercises.find((e) => e.id === exercise.id)?.selected
                  return (
                    <button
                      key={exercise.id}
                      type="button"
                      onClick={() => toggleExercise(exercise)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-left"
                      style={{
                        backgroundColor: isSelected ? '#white' : '#2C2C2E',
                        border: `1px solid ${isSelected ? '#F97316' : 'transparent'}`,
                      }}
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{exercise.name}</p>
                        <p className="text-xs text-white/40">{exercise.muscleGroup}</p>
                      </div>
                      {isSelected && <CheckCircle size={16} style={{ color: '#F97316' }} />}
                    </button>
                  )
                })}
              </div>

              {/* Configuração dos exercícios selecionados */}
              {selectedExercises.length > 0 && (
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <p className="text-xs text-white/50 font-semibold uppercase">
                    {selectedExercises.length} exercício(s) selecionado(s)
                  </p>
                  <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
                    {selectedExercises.map((exercise) => (
                      <div key={exercise.id} className="rounded-lg p-3 space-y-2" style={{ backgroundColor: '#2C2C2E' }}>
                        <p className="text-sm font-semibold text-white">{exercise.name}</p>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { field: 'sets',  label: 'Séries',   type: 'number', placeholder: '3' },
                            { field: 'reps',  label: 'Reps',     type: 'text',   placeholder: '10-12' },
                            { field: 'load',  label: 'Carga',    type: 'text',   placeholder: '20kg' },
                            { field: 'rest',  label: 'Descanso', type: 'text',   placeholder: '60s' },
                          ].map((f) => (
                            <div key={f.field} className="space-y-1">
                              <Label className="text-xs text-white/50">{f.label}</Label>
                              <Input
                                type={f.type}
                                placeholder={f.placeholder}
                                defaultValue={(exercise as any)[f.field]}
                                onChange={(e) => updateExercise(exercise.id, f.field, e.target.value)}
                                className="border-white/20 text-white placeholder:text-white/30 h-8 text-xs"
                                style={{ backgroundColor: '#1C1C1E' }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-white/20 text-black hover:bg-white/10"
                  onClick={() => setStep(1)}
                >
                  ← Voltar
                </Button>
                <Button
                  type="button"
                  className="flex-1 text-white font-semibold"
                  style={{ backgroundColor: '#F97316' }}
                  disabled={isPending}
                  onClick={() => planData && createPlan(planData)}
                >
                  {isPending ? 'Salvando...' : 'Salvar Ficha'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}