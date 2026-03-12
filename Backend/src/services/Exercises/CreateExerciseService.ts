import { string } from 'zod';
import prismaClient from '../../prisma/index';

interface CreateExerciseRequest {
  name: string
  muscleGroup: string
  description?: string
  gifUrl?: string
}

export class CreateExerciseService {
  async execute({ name, muscleGroup, description, gifUrl }: CreateExerciseRequest) {
    const exercise = await prismaClient.exercise.create({
      data: { name, muscleGroup, description, gifUrl},
    })

    return exercise
  }
}