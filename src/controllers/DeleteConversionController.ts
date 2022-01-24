import { Request, Response } from "express";
import { DeleteConversionService } from "../services/DeleteConversionService";

class DeleteConversionController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const service = new DeleteConversionService();

    await service.execute(id);

    return res.json("O item foi deletado com sucesso");
  }
}

export { DeleteConversionController };
