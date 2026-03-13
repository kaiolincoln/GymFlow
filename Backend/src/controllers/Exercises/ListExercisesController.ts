import { Request, Response } from "express";
import { ListExercisesService } from "../../services/Exercises/ListExercisesService";

class ListExercisesController {
  async handle(req: Request, res: Response) {

    const service = new ListExercisesService();

    const exercises = await service.execute();

    return res.json(exercises);
  }
}

export { ListExercisesController };