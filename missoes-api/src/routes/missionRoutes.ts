import { Router } from 'express';
import { MissaoController } from '../controllers/missao.controller';
import { autenticar } from '../middlewares/auth.middleware';

const router = Router();

router.get('/missoes', MissaoController.listarMissoes);
router.post('/missoes', autenticar, MissaoController.cadastrarMissao);
router.delete('/missoes/:id', autenticar, MissaoController.excluirMissao);

export default router;
