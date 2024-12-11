    import bcrypt from 'bcryptjs';
    import jwt from 'jsonwebtoken';
    import { UsuarioRepository } from '../repositories/usuario.repository';

    export class UsuarioService {
      static async registrar(usuarioData: any) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(usuarioData.senha, salt);
        const usuario = await UsuarioRepository.criar({ ...usuarioData, senha: hashedPassword });
        return usuario;
      }

      static async login(email: string, senha: string) {
        const usuario = await UsuarioRepository.findByEmail(email);
        if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
          throw new Error('Credenciais inválidas');
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
      }
    }
