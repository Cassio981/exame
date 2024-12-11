        import { Request, Response } from 'express';
        import { MissaoService } from '../services/missao.service';

        export class MissaoController {
          static async listarMissoes(req: Request, res: Response) {
            try {
              const missoes = await MissaoService.listarMissoes();
              res.status(200).json(missoes);
            } catch (err) {
              res.status(500).json({ message: 'Erro ao listar missões' });
            }
          }

          static async cadastrarMissao(req: Request, res: Response) {
            try {
              const { nome, planetaAlvo, duracaoEmAnos, quantidadeTripulantes, tecnologias } = req.body;
              const novaMissao = await MissaoService.criarMissao({ nome, planetaAlvo, duracaoEmAnos, quantidadeTripulantes, tecnologias });
              res.status(201).json(novaMissao);
            } catch (err) {
              res.status(500).json({ message: 'Erro ao cadastrar missão' });
            }
          }

          static async excluirMissao(req: Request, res: Response) {
            try {
              const { id } = req.params;
              await MissaoService.excluirMissao(parseInt(id));
              res.status(200).json({ message: 'Missão excluída com sucesso' });
            } catch (err) {
              res.status(500).json({ message: 'Erro ao excluir missão' });
            }
          }
        }
