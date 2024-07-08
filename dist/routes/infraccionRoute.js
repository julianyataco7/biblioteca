"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const infraccionController_1 = require("../controller/infraccionController");
const router = express_1.default.Router();
// Creamos el tag
/**
 * @swagger
 * tags:
 *   name: Infracciones
 */
// Creamos el schema infraccionModel
/**
 * @swagger
 * components:
 *   schemas:
 *     infraccionModel:
 *       type: object
 *       properties:
 *         idInfraccion:
 *           type: integer
 *           description: Identificador único de la infracción
 *         prestamo:
 *           $ref: '#/components/schemas/prestamoModel'
 *           description: Información del préstamo asociado a la infracción
 *         tipoInfraccion:
 *           $ref: '#/components/schemas/tipoInfraccionModel'
 *           description: Tipo de infracción asociada
 *         multa:
 *           type: string
 *           description: Monto de la multa por la infracción
 *         estado:
 *           type: string
 *           description: Estado de la infracción
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del registro de la infracción
 */
router.post('/', infraccionController_1.insertarInfraccion);
/**
 * @swagger
 * /api/v1/infracciones/:
 *   post:
 *     summary: Insertar una infracción
 *     tags: [Infracciones]
 *     requestBody:
 *       description: Esquema de la Infracción
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/infraccionModel'
 *     responses:
 *       200:
 *         description: Infracción insertada con éxito
 *       500:
 *         description: Error en el servidor
 */
router.get('/', infraccionController_1.listarInfracciones);
/**
 * @swagger
 * /api/v1/infracciones/:
 *   get:
 *     summary: Obtener la lista de infracciones
 *     tags:
 *       - Infracciones
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: Infracción no existente
 */
router.get('/:id', infraccionController_1.obtenerInfraccion);
/**
 * @swagger
 * /api/v1/infracciones/{id}:
 *   get:
 *     summary: Obtener una infracción por id
 *     tags:
 *       - Infracciones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la infracción que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Infracción obtenida con éxito
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', infraccionController_1.modificarInfraccion);
/**
 * @swagger
 * /api/v1/infracciones/{id}:
 *   put:
 *     summary: Modificar una Infracción
 *     tags: [Infracciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la infracción que desea modificar
 *     requestBody:
 *       description: Esquema de la Infracción
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/infraccionModel'
 *     responses:
 *       200:
 *         description: Infracción modificada con éxito
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', infraccionController_1.eliminarInfraccion);
/**
 * @swagger
 * /api/v1/infracciones/{id}:
 *   patch:
 *     summary: Eliminar una infracción (forma lógica)
 *     tags: [Infracciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la infracción que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Infracción eliminada con éxito
 *       500:
 *         description: Error en el servidor
 */
exports.default = router;
//# sourceMappingURL=infraccionRoute.js.map