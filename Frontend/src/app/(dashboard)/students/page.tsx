'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Search, User, Mail, Lock, Phone, Target, CreditCard, Calendar } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { studentsService } from '@/services/students.service'
import { Card, CardContent } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Student } from '@/types'
import { useState } from 'react'
import { z } from 'zod'

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

const createStudentSchema = z.object({
  name:      z.string().min(2, 'Nome obrigatório'),
  email:     z.string().email('Email inválido'),
  password:  z.string().min(6, 'Mínimo 6 caracteres'),
  phone:     z.string().optional(),
  goal:      z.string().optional(),
  birthDate: z.string().optional(),
  plan:      z.enum(['MONTHLY', 'QUARTERLY', 'SEMIANNUAL', 'ANNUAL']),
})

type CreateStudentForm = z.infer<typeof createStudentSchema>

function FieldGroup({ icon: Icon, label, error, children }: {
  icon: any, label: string, error?: string, children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
        <Icon size={14} style={{ color: '#F97316' }} />
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default function StudentsPage() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()
  const router = useRouter()

  const { data, isLoading } = useQuery({
    queryKey: ['students', search],
    queryFn: () => studentsService.list({ search }),
  })

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<CreateStudentForm>({
    resolver: zodResolver(createStudentSchema),
    defaultValues: { plan: 'MONTHLY' },
  })

  const { mutate: createStudent, isPending } = useMutation({
    mutationFn: studentsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
      reset()
      setOpen(false)
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Alunos</h1>
        <Button onClick={() => setOpen(true)} style={{ backgroundColor: '#F97316' }}>
          <Plus size={16} className="mr-2" />
          Novo Aluno
        </Button>
      </div>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome ou email..."
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
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Plano</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.students.map((student: Student) => {
                  const status = statusLabel[student.status]
                  return (
                    <tr
                      key={student.id}
                      onClick={() => router.push(`/students/${student.id}`)}
                      className="border-b last:border-0 hover:bg-muted/40 transition-colors cursor-pointer"
                    >
                      <td className="p-4 font-medium">{student.user.name}</td>
                      <td className="p-4 text-muted-foreground">{student.user.email}</td>
                      <td className="p-4 text-muted-foreground">{planLabel[student.plan]}</td>
                      <td className="p-4">
                        <Badge style={{ backgroundColor: status.color, color: 'white' }}>
                          {status.label}
                        </Badge>
                      </td>
                    </tr>
                  )
                })}
                {data?.students.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-muted-foreground">
                      Nenhum aluno encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {/* Modal Novo Aluno */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-white shadow-2xl">
          <DialogHeader className="pb-2 border-b">
            <DialogTitle className="flex items-center gap-2 text-gray-900 text-lg">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F97316' }}>
                <User size={14} color="white" />
              </div>
              Novo Aluno
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit((d) => createStudent(d))} className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <FieldGroup icon={User} label="Nome completo" error={errors.name?.message}>
                  <Input placeholder="João Silva" {...register('name')} className="border-gray-300 text-gray-900" />
                </FieldGroup>
              </div>
              <div className="col-span-2">
                <FieldGroup icon={Mail} label="Email" error={errors.email?.message}>
                  <Input type="email" placeholder="joao@email.com" {...register('email')} className="border-gray-300 text-gray-900" />
                </FieldGroup>
              </div>
              <div className="col-span-2">
                <FieldGroup icon={Lock} label="Senha" error={errors.password?.message}>
                  <Input type="password" placeholder="••••••••" {...register('password')} className="border-gray-300 text-gray-900" />
                </FieldGroup>
              </div>
              <div className="col-span-2">
                <FieldGroup icon={Calendar} label="Data de Nascimento">
                  <Input type="date" {...register('birthDate')} className="border-gray-300 text-gray-900" />
                </FieldGroup>
              </div>
              <div>
                <FieldGroup icon={Phone} label="Telefone">
                  <Input placeholder="(11) 99999-9999" {...register('phone')} className="border-gray-300 text-gray-900" />
                </FieldGroup>
              </div>
              <div>
                <FieldGroup icon={CreditCard} label="Plano">
                  <Select defaultValue="MONTHLY" onValueChange={(val) => setValue('plan', val as any)}>
                    <SelectTrigger className="border-gray-300 text-gray-900 bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="MONTHLY">Mensal</SelectItem>
                      <SelectItem value="QUARTERLY">Trimestral</SelectItem>
                      <SelectItem value="SEMIANNUAL">Semestral</SelectItem>
                      <SelectItem value="ANNUAL">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </FieldGroup>
              </div>
              <div className="col-span-2">
                <FieldGroup icon={Target} label="Objetivo">
                  <Input placeholder="Ex: Hipertrofia, emagrecimento..." {...register('goal')} className="border-gray-300 text-gray-900" />
                </FieldGroup>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700"
                onClick={() => { reset(); setOpen(false) }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 text-white font-semibold"
                style={{ backgroundColor: '#F97316' }}
                disabled={isPending}
              >
                {isPending ? 'Salvando...' : 'Salvar Aluno'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}