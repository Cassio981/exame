import "reflect-metadata";
import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Missao } from "./models/Missao"; // Importe suas entidades (como a Missao)

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    // Conecta ao banco de dados usando as configurações do ormconfig.json
    await createConnection();
    console.log("Conectado ao banco de dados com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

connectDB();

// Exemplo de rota para listar missões
app.get("/missoes", async (req: Request, res: Response) => {
  const missaoRepository = getRepository(Missao);
  const missoes = await missaoRepository.find();
  res.json(missoes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
