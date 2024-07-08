"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tipoInfraccionController_1 = require("../controller/tipoInfraccionController");
const router = express_1.default.Router();
// creamos el tag
/**
 * @swagger
 * tags:
 *   name: TiposInfraccion
 */
// creamos el schema tipoInfraccion
/**
 * @swagger
 * components:
 *   schemas:
 *     tipoInfraccionModel:
 *       type: object
 *       properties:
 *         idTipoInfraccion:
 *           type: integer
 *           description: Identificador único del tipo de infracción
 *         descripcion:
 *           type: string
 *           description: Descripción del tipo de infracción
 *         penalizacionMonto:
 *           type: number
 *           description: Monto de la penalización del tipo de infracción
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la creacion del registro del tipo de infracción
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del registro del tipo de infracción
 */
// Ruta para insertar tipoInfraccion
router.post('/', tipoInfraccionController_1.insertarTipoInfraccion);
/**
 * @swagger
 * /api/v1/tipoInfracciones/:
 *   post:
 *     summary: Insertar un tipo de infracción
 *     tags: [TiposInfraccion]
 *     requestBody:
 *       description: Esquema del Tipo de Infracción
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tipoInfraccionModel'
 *     responses:
 *       200:
 *         description: Tipo de infracción insertado con éxito
 *       500:
 *         description: Error en el servidor
 */
// Ruta para listar tiposInfraccion
router.get('/', tipoInfraccionController_1.listarTiposInfraccion);
/**
 * @swagger
 * /api/v1/tipoInfracciones/:
 *   get:
 *     summary: Obtener la lista de tipos de infracción
 *     tags:
 *       - TiposInfraccion
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */
// Ruta para obtener tipoInfraccion por id
router.get('/:id', tipoInfraccionController_1.obtenerTipoInfraccion);
/**
 * @swagger
 * /api/v1/tipoInfracciones/{id}:
 *   get:
 *     summary: Obtener un tipo de infracción por id
 *     tags:
 *       - TiposInfraccion
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del tipo de infracción que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Tipo de infracción obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */
// Ruta para modificar tipoInfraccion
router.put('/:id', tipoInfraccionController_1.modificarTipoInfraccion);
/**
 * @swagger
 * /api/v1/tipoInfracciones/{id}:
 *   put:
 *     summary: Modificar un tipo de infracción
 *     tags: [TiposInfraccion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del tipo de infracción que desea modificar
 *     requestBody:
 *       description: Esquema del Tipo de Infracción
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tipoInfraccionModel'
 *     responses:
 *       200:
 *         description: Tipo de infracción modificado con éxito
 *       500:
 *         description: Error en el servidor
 */
// Ruta para eliminar tipoInfraccion
router.patch('/:id', tipoInfraccionController_1.eliminarTipoInfraccion);
/**
 * @swagger
 * /api/v1/tipoInfracciones/{id}:
 *   patch:
 *     summary: Eliminar un tipo de infracción
 *     tags: [TiposInfraccion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del tipo de infracción que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Tipo de infracción eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */
exports.default = router;
//# sourceMappingURL=tipoInfraccionRoute.js.map