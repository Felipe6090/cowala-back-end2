import prismaClient from "../prisma";

class FindConversionService {
  async execute(id: string) {
    const item = await prismaClient.conversions.findUnique({
      where: {
        id: id,
      },
    });

    return item;
  }
}

export { FindConversionService };
