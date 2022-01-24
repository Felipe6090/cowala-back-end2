import { Request, Response } from "express";
import { ListConversionService } from "../services/ListConversionService";

class ListConversionsController {
  async handle(req: Request, res: Response) {
    const service = new ListConversionService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { ListConversionsController };
