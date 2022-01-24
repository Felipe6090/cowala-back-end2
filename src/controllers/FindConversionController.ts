import { Request, Response } from "express";
import { FindConversionService } from "../services/FindConversionService";

class FindConversionController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const service = new FindConversionService();

    const result = await service.execute(id);

    return res.json(result);
  }
}

export { FindConversionController };
