import express from 'express';
import {eliminarEjemplar,insertarEjemplar,listarEjemplares,modificarEjemplar,obtenerEjemplar} from '../controller/ejemplarController';

const router = express.Router();

router.post('/', insertarEjemplar);
router.get('/', listarEjemplares);
router.get('/:id', obtenerEjemplar);
router.put('/:id', modificarEjemplar);
router.patch('/:id', eliminarEjemplar);

export default router;



