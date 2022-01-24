import axios from "axios";
import { NextFunction, Request, Response } from "express";

import calculateConversion from "../utils/CalculateConversion";

export async function HandleNewConversion(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { originalCoin, conversionCoin, originalValue } = req.body;

  const url = `https://economia.awesomeapi.com.br/last/${conversionCoin}-${originalCoin}`;

  const apiData = await axios({
    method: "get",
    url: url,
  }).then((result) => result.data);

  const conversionCoinValue = apiData[`${conversionCoin}${originalCoin}`].bid;

  const finalValue = calculateConversion(originalValue, conversionCoinValue);

  const responseData = {
    originalCoin: originalCoin,
    conversionCoin: conversionCoin,
    originalValue: originalValue,
    finalValue: finalValue,
  };

  res.locals.responseData = responseData;

  return next();
}
