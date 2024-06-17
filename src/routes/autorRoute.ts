import express from 'express';
import {eliminarAutor,insertarAutor,listarAutores,modificarAutor,obtenerAutor} from '../controller/autorController';

const router = express.Router();

router.post('/', insertarAutor);
router.get('/', listarAutores);
router.get('/:id', obtenerAutor);
router.put('/:id', modificarAutor);
router.patch('/:id', eliminarAutor);

export default router;
