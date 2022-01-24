import prismaClient from "../prisma";

class DeleteConversionService {
  async execute(id: string) {
    const item = await prismaClient.conversions.delete({
      where: {
        id: id,
      },
    });

    return item;
  }
}

export { DeleteConversionService };
