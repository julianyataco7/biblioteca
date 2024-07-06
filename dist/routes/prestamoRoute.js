"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prestamoController_1 = require("../controller/prestamoController");
const router = express_1.default.Router();
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
router.post('/', prestamoController_1.insertarPrestamo);
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
router.get('/', prestamoController_1.listarPrestamos);
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
router.get('/:id', prestamoController_1.obtenerPrestamo);
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
router.put('/:id', prestamoController_1.modificarPrestamo);
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
router.patch('/:id', prestamoController_1.eliminarPrestamo);
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
exports.default = router;
//# sourceMappingURL=prestamoRoute.js.map