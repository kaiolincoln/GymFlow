
export interface TemplateExercise {
    exerciseId: string
    exerciseName: string
    muscleGroup: string
    sets: number
    reps: string
    load?: string
    rest?: string
    order: number
  }
   
  export interface TemplateDay {
    label: string
    order: number
    exercises: TemplateExercise[]
  }
   
  export interface WorkoutTemplate {
    id: string
    name: string
    description?: string
    createdById: string
    createdByName: string
    days: TemplateDay[]
    createdAt: string
  }
   
  const templates = new Map<string, WorkoutTemplate>()
   
  export class WorkoutTemplateService {
    list(createdById?: string): WorkoutTemplate[] {
      const all = Array.from(templates.values())
      return all.filter(
        (t) => !createdById || t.createdById === createdById
      ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
   
    create(data: Omit<WorkoutTemplate, 'id' | 'createdAt'>): WorkoutTemplate {
      const template: WorkoutTemplate = {
        ...data,
        id: Math.random().toString(36).slice(2),
        createdAt: new Date().toISOString(),
      }
      templates.set(template.id, template)
      return template
    }
   
    get(id: string): WorkoutTemplate | undefined {
      return templates.get(id)
    }
   
    delete(id: string, userId: string): boolean {
      const template = templates.get(id)
      if (!template || template.createdById !== userId) return false
      templates.delete(id)
      return true
    }
  }
   
  export const workoutTemplateService = new WorkoutTemplateService()