/*
  Migration: add_workout_days
  Estratégia: criar WorkoutDay padrão para cada WorkoutPlan existente,
  migrar os WorkoutExercise existentes para esse dia, depois adicionar constraint NOT NULL.
*/

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_workoutPlanId_fkey";

-- CreateTable WorkoutDay
CREATE TABLE "WorkoutDay" (
    "id" TEXT NOT NULL,
    "workoutPlanId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "WorkoutDay_pkey" PRIMARY KEY ("id")
);

-- Para cada WorkoutPlan existente, cria um "Treino A" padrão
INSERT INTO "WorkoutDay" ("id", "workoutPlanId", "label", "order")
SELECT gen_random_uuid()::text, "id", 'Treino A', 0
FROM "WorkoutPlan";

-- Adiciona a coluna como nullable primeiro
ALTER TABLE "WorkoutExercise" ADD COLUMN "workoutDayId" TEXT;

-- Preenche workoutDayId com o dia criado para o plano correspondente
UPDATE "WorkoutExercise" we
SET "workoutDayId" = wd."id"
FROM "WorkoutDay" wd
WHERE wd."workoutPlanId" = we."workoutPlanId";

-- Remove a coluna antiga
ALTER TABLE "WorkoutExercise" DROP COLUMN "workoutPlanId";

-- Agora torna NOT NULL (todos os registros já têm valor)
ALTER TABLE "WorkoutExercise" ALTER COLUMN "workoutDayId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "WorkoutDay" ADD CONSTRAINT "WorkoutDay_workoutPlanId_fkey" FOREIGN KEY ("workoutPlanId") REFERENCES "WorkoutPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_workoutDayId_fkey" FOREIGN KEY ("workoutDayId") REFERENCES "WorkoutDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;
