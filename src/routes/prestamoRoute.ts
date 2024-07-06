import express from 'express';
import {insertarPrestamo,listarPrestamos,obtenerPrestamo,modificarPrestamo,eliminarPrestamo} from '../controller/prestamoController';

const router = express.Router();

// creamos el tag
/**
 * @swagger
 * tags:
 *   name: Prestamos
 */

// creamos el schema prestamo
/**
 * @swagger
 * components:
 *   schemas:
 *     prestamoModel:
 *       type: object
 *       properties:
 *         idPrestamo:
 *           type: integer
 *           description: Identificador único del prestamo
 *         Usuario:
 *           $ref: '#/components/schemas/usuarioModel'
 *           description: Información del usuario del prestamo
 *         Ejemplar:
 *           $ref: '#/components/schemas/ejemplarModel'
 *           description: Información del ejemplar del prestamo
 *         fechaReserva:
 *           type: string
 *           format: date-time
 *           description: Fecha de reserva del prestamo
 *         fechaPrestamo:
 *           type: string
 *           format: date-time
 *           description: Fecha de prestamo
 *         fechaEstimadaDevolucion:
 *           type: string
 *           format: date-time
 *           description: Fecha estimada de devolución
 *         fechaDevolucion:
 *           type: string
 *           format: date-time
 *           description: Fecha de devolución
 *         estado:
 *           type: string
 *           description: Estado del prestamo
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del registro del prestamo
 */

router.post('/', insertarPrestamo);
/**
 * @swagger
 * /api/v1/prestamos/:
 *   post:
 *     summary: Insertar un prestamo
 *     tags: [Prestamos]
 *     requestBody:
 *       description: Esquema del Prestamo
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/prestamoModel'
 *     responses:
 *       200:
 *         description: Prestamo insertado con éxito
 *       500:
 *         description: Error en el servidor
 */
router.get('/', listarPrestamos);
/**
 * @swagger
 * /api/v1/prestamos/:
 *   get:
 *     summary: Obtener la lista de prestamos
 *     tags:
 *       - Prestamos
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: Prestamo no existente
 */
router.get('/:id', obtenerPrestamo);
/**
 * @swagger
 * /api/v1/prestamos/{id}:
 *   get:
 *     summary: Obtener un prestamo por id
 *     tags:
 *       - Prestamos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del prestamo que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Prestamo obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', modificarPrestamo);
/**
 * @swagger
 * /api/v1/prestamos/{id}:
 *   put:
 *     summary: Modificar un Prestamo
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del prestamo que desea modificar
 *     requestBody:
 *       description: Esquema del Prestamo
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/prestamoModel'
 *     responses:
 *       200:
 *         description: Prestamo modificado con éxito
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', eliminarPrestamo);
/**
 * @swagger
 * /api/v1/prestamos/{id}:
 *   patch:
 *     summary: Eliminar un prestamo (forma logica)
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del prestamo que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Prestamo eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */

export default router;
