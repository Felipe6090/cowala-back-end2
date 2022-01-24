import prismaClient from "../prisma";

type IData = {
  originalCoin: string;
  conversionCoin: string;
  originalValue: string;
  finalValue: string;
};

class ConvertService {
  async execute(conversionsData: IData) {
    const newConversion = await prismaClient.conversions.create({
      data: {
        originalCoin: conversionsData.originalCoin,
        conversionCoin: conversionsData.conversionCoin,
        originalValue: conversionsData.originalValue,
        finalValue: conversionsData.finalValue,
      },
    });

    return newConversion;
  }
}

export { ConvertService };
