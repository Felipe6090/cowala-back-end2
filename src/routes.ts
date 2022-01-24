import { Request, Response, Router } from "express";

import { HandleNewConversion } from "./middlewares/HandleNewConversion";

import { ConvertController } from "./controllers/ConvertController";
import { DeleteConversionController } from "./controllers/DeleteConversionController";
import { FindConversionController } from "./controllers/FindConversionController";
import { ListConversionsController } from "./controllers/ListConversionsController";

const convertController = new ConvertController();
const deleteConversionController = new DeleteConversionController();
const findConversionController = new FindConversionController();
const listConversionsController = new ListConversionsController();

const routes = Router();

routes.get("/convert", HandleNewConversion, convertController.handle);

routes.delete("/deleteConversion", deleteConversionController.handle);

routes.get("/findConversion", findConversionController.handle);

routes.get("/listConversion", listConversionsController.handle);

export { routes };
