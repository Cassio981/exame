import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();

router.post('/usuarios/registro', UsuarioController.registrar);
router.post('/usuarios/login', UsuarioController.login);

export default router;
