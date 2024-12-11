import { MissaoRepository } from '../repositories/missao.repository';

export class MissaoService {
  static async listarMissoes() {
    return MissaoRepository.listar();
  }

  static async criarMissao(missaoData: any) {
    return MissaoRepository.criar(missaoData);
  }

  static async excluirMissao(id: number) {
    return MissaoRepository.excluir(id);
  }
}
