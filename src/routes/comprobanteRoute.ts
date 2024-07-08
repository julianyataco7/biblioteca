import express from 'express';
import { insertarComprobante, listarComprobantes, obtenerComprobante, modificarComprobante, eliminarComprobante } from '../controller/comprobanteController';

const router = express.Router();

// Crear el tag para Swagger
/**
 * @swagger
 * tags:
 *   name: Comprobantes
 */

// Crear el schema para comprobante
/**
 * @swagger
 * components:
 *   schemas:
 *     comprobanteModel:
 *       type: object
 *       properties:
 *         idComprobante:
 *           type: integer
 *           description: Identificador único del comprobante
 *         numeroComprobante:
 *           type: integer
 *           description: Número único del comprobante
 *         usuario:
 *           $ref: '#/components/schemas/usuarioModel'
 *           description: Información del usuario asociado al comprobante
 *         prestamo:
 *           $ref: '#/components/schemas/prestamoModel'
 *           description: Información del préstamo asociado al comprobante
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de emisión del comprobante
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del comprobante
 */


// Ruta para insertar un comprobante
router.post('/', insertarComprobante);
/**
 * @swagger
 * /api/v1/comprobantes/:
 *   post:
 *     summary: Insertar un comprobante
 *     tags: [Comprobantes]
 *     requestBody:
 *       description: Esquema del comprobante
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/comprobanteModel'
 *     responses:
 *       200:
 *         description: Comprobante insertado con éxito
 *       500:
 *         description: Error en el servidor
 */

// Ruta para listar todos los comprobantes
router.get('/', listarComprobantes);
/**
 * @swagger
 * /api/v1/comprobantes/:
 *   get:
 *     summary: Obtener la lista de comprobantes
 *     tags: [Comprobantes]
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: Comprobantes no existentes
 */

// Ruta para obtener un comprobante por id
router.get('/:id', obtenerComprobante);
/**
 * @swagger
 * /api/v1/comprobantes/{id}:
 *   get:
 *     summary: Obtener un comprobante por id
 *     tags: [Comprobantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del comprobante que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Comprobante obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */

// Ruta para modificar un comprobante por id
router.put('/:id', modificarComprobante);
/**
 * @swagger
 * /api/v1/comprobantes/{id}:
 *   put:
 *     summary: Modificar un comprobante
 *     tags: [Comprobantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del comprobante que desea modificar
 *     requestBody:
 *       description: Esquema del comprobante
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/comprobanteModel'
 *     responses:
 *       200:
 *         description: Comprobante modificado con éxito
 *       500:
 *         description: Error en el servidor
 */

// Ruta para eliminar un comprobante por id (forma lógica)
router.patch('/:id', eliminarComprobante);
/**
 * @swagger
 * /api/v1/comprobantes/{id}:
 *   patch:
 *     summary: Eliminar un comprobante
 *     tags: [Comprobantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del comprobante que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Comprobante eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */

export default router;
