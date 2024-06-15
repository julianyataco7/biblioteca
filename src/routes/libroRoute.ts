import express from 'express';
import {eliminarLibro,insertarLibro,listarLibros,modificarLibro,obtenerLibro} from '../controller/libroController';

const router = express.Router();

router.post('/', insertarLibro);
router.get('/', listarLibros);
router.get('/:id', obtenerLibro);
router.put('/:id', modificarLibro);
router.patch('/:id', eliminarLibro);

export default router;
