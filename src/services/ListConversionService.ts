import prismaClient from "../prisma";

class ListConversionService {
  async execute() {
    const list = await prismaClient.conversions.findMany();

    return list;
  }
}

export { ListConversionService };
