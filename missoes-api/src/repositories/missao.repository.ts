import { MissaoModel } from '../models/missao.model';

export class MissaoRepository {
  static async listar() {
    return MissaoModel.listar();
  }

  static async criar(missaoData: any) {
    return MissaoModel.criar(missaoData);
  }

  static async excluir(id: number) {
    return MissaoModel.excluir(id);
  }
}
