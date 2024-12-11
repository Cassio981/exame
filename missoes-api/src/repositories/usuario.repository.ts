import { UsuarioModel } from '../models/usuario.model';

export class UsuarioRepository {
  static async findByEmail(email: string) {
    return UsuarioModel.findByEmail(email);
  }

  static async criar(usuarioData: any) {
    return UsuarioModel.criar(usuarioData);
  }
}
