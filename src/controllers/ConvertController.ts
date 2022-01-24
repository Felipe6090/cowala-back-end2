import { Request, Response } from "express";
import { ConvertService } from "../services/ConvertService";

class ConvertController {
  async handle(req: Request, res: Response) {
    const data = res.locals.responseData;

    const service = new ConvertService();

    const result = await service.execute(data);

    return res.json({
      "Conversão feita, o id é": result.id,
      "Valor final": result.finalValue,
    });
  }
}

export { ConvertController };
