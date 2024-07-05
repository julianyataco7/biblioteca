import express from 'express';
import {eliminarEjemplar,insertarEjemplar,listarEjemplares,modificarEjemplar,obtenerEjemplar} from '../controller/ejemplarController';

const router = express.Router();

// creamos el tag
/**
 * @swagger
 * tags:
 *   name: Ejemplares
 */

// creamos el schema ejemplar
/**
 * @swagger
 * components:
 *   schemas:
 *     ejemplarModel:
 *       type: object
 *       properties:
 *         idEjemplar:
 *           type: integer
 *           description: Identificador único del ejemplar
 *         libro:
 *           $ref: '#/components/schemas/libroModel'
 *           description: Información del libro al que pertenece el ejemplar
 *         conservacion:
 *           type: string
 *           description: Estado de conservación del ejemplar
 *         disponibilidad:
 *           type: integer
 *           description: Disponibilidad del ejemplar (0 para no disponible, 1 para disponible)
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del registro del ejemplar
 */

router.post('/', insertarEjemplar);
/**
 * @swagger
 * /api/v1/ejemplares/:
 *   post:
 *     summary: Insertar un ejemplar
 *     tags: [Ejemplares]
 *     requestBody:
 *       description: Esquema del Ejemplar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ejemplarModel'
 *     responses:
 *       200:
 *         description: Ejemplar insertado con éxito
 *       500:
 *         description: Error en el servidor
 */
router.get('/', listarEjemplares);
/**
 * @swagger
 * /api/v1/ejemplares/:
 *   get:
 *     summary: Obtener la lista de ejemplares
 *     tags:
 *       - Ejemplares
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: ejemplar no existente
 */
router.get('/:id', obtenerEjemplar);
/**
 * @swagger
 * /api/v1/ejemplares/{id}:
 *   get:
 *     summary: Obtener un ejemplar por id
 *     tags:
 *       - Ejemplares
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del ejemplar que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Ejemplar obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', modificarEjemplar);
/**
 * @swagger
 * /api/v1/ejemplares/{id}:
 *   put:
 *     summary: Modificar un Ejemplar
 *     tags: [Ejemplares]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del ejemplar que desea modificar
 *     requestBody:
 *       description: Esquema del Ejemplar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ejemplarModel'
 *     responses:
 *       200:
 *         description: Ejemplar modificado con éxito
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', eliminarEjemplar);
/**
 * @swagger
 * /api/v1/ejemplares/{id}:
 *   patch:
 *     summary: Eliminar un ejemplar (forma logica)
 *     tags: [Ejemplares]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del ejemplar que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Ejemplar eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */

export default router;



