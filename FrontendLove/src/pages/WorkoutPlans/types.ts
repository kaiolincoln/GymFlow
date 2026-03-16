export interface ExerciseRow {
    exerciseId: string;
    sets: number;
    reps: string;
    load: string;
    rest: string;
    order: number;
  }
  
  export interface DayForm {
    label: string;
    order: number;
    exercises: ExerciseRow[];
    collapsed: boolean;
  }
  
  export const DEFAULT_LABELS = ["Treino A", "Treino B", "Treino C", "Treino D", "Treino E", "Treino F"];