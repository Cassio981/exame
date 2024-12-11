datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Usuario {
  id        Int      @id @default(autoincrement())
  nome      String
  email     String   @unique
  senha     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Missao {
  id                 Int      @id @default(autoincrement())
  nome               String
  planetaAlvo        String
  duracaoEmAnos      Float
  quantidadeTripulantes Int
  tecnologias        String[]
  createdAt          DateTime @default(now())
}
