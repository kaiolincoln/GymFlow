'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { studentsService } from '@/services/students.service'
import { Student } from '@/types'

export default function WorkoutPlansPage() {
  const [search, setSearch] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['students-workout', search],
    queryFn: () => studentsService.list({ search }),
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Fichas de Treino</h1>
      </div>

      <p className="text-muted-foreground mb-4">Selecione um aluno para ver ou criar fichas de treino.</p>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar aluno..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
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
                  <th className="text-left p-4">Aluno</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Fichas</th>
                </tr>
              </thead>
              <tbody>
                {data?.students.map((student: Student) => (
                  <tr
                    key={student.id}
                    className="border-b last:border-0 hover:bg-muted/40 transition-colors cursor-pointer"
                  >
                    <td className="p-4 font-medium">{student.user.name}</td>
                    <td className="p-4 text-muted-foreground">{student.user.email}</td>
                    <td className="p-4">
                      <Badge variant="outline" style={{ borderColor: '#F97316', color: '#F97316' }}>
                        {student._count?.workoutPlans ?? 0} fichas
                      </Badge>
                    </td>
                  </tr>
                ))}
                {data?.students.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-muted-foreground">
                      Nenhum aluno encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}