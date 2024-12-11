import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class MissaoModel {
  static async listar() {
    return prisma.missao.findMany();
  }

  static async criar(missaoData: any) {
    return prisma.missao.create({
      data: missaoData,
    });
  }

  static async excluir(id: number) {
    return prisma.missao.delete({
      where: { id },
    });
  }
}
