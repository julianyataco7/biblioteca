import express from 'express';
import {eliminarAutor,insertarAutor,listarAutores,modificarAutor,obtenerAutor} from '../controller/autorController';

const router = express.Router();
// creamos el tag
/**
 * @swagger
 * tags:
 *   name: Autores
 */

// Creamos componentes de esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     autorModel:
 *       type: object
 *       properties:
 *         idAutor:
 *           type: number
 *           description: id del autor
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: La fecha de creacion del autor
 *         nombre:
 *           type: string
 *           description: El nombre del autor
 *         apellidoPaterno:
 *           type: string
 *           description: El apellido paterno del autor
 *         apellidoMaterno:
 *           type: string
 *           description: El apellido materno del autor
 *         nacionalidad:
 *           type: string
 *           description: La nacionalidad del autor
 *         estado:
 *           type: string
 *           description: El estado del autor 1 o 0
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: La fecha de modificación del autor
 */



router.post('/', insertarAutor);
/**
 * @swagger
 * /api/v1/autores/:
 *   post:
 *     summary: Insertar un autor
 *     tags: [Autores]
 *     requestBody:
 *       description: Esquema de Autor
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/autorModel'
 *     responses:
 *       200:
 *         description: Autor insertado con éxito
 *       500:
 *         description: Error en el servidor
 */


router.get('/', listarAutores);
/**
 * @swagger
 * /api/v1/autores/:
 *   get:
 *     summary: Obtener la lista de autores
 *     tags:
 *       - Autores
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: Autor no existente
 */
router.get('/:id', obtenerAutor);
/**
 * @swagger
 * /api/v1/autores/{id}:
 *   get:
 *     summary: Obtener un autor por id
 *     tags:
 *       - Autores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del autor que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Autor obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', modificarAutor);
/**
 * @swagger
 * /api/v1/autores/{id}:
 *   put:
 *     summary: Modifiar un autor
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del autor que desea obtener
 *     requestBody:
 *       description: Esquema de Autor
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/autorModel'
 *     responses:
 *       200:
 *         description: Autor modificado con éxito
 *       500:
 *         description: Error en el servidor
 */

router.patch('/:id', eliminarAutor);
/**
 * @swagger
 * /api/v1/autores/{id}:
 *   patch:
 *     summary: Eliminar un autor (forma logica)
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del autor que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Autor eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */

export default router;
