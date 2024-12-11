import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UsuarioModel {
  static async findByEmail(email: string) {
    return prisma.usuario.findUnique({
      where: { email },
    });
  }

  static async criar(usuarioData: any) {
    return prisma.usuario.create({
      data: usuarioData,
    });
  }
}
