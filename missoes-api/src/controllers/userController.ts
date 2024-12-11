import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

export class UsuarioController {
  static async registrar(req: Request, res: Response) {
    try {
      const { nome, email, senha } = req.body;
      const usuario = await UsuarioService.registrar({ nome, email, senha });
      res.status(201).json(usuario);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const token = await UsuarioService.login(email, senha);
      res.status(200).json({ token });
    } catch (err) {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  }
}
