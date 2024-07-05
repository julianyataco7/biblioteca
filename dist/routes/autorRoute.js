"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorController_1 = require("../controller/autorController");
const router = express_1.default.Router();
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
 *         nombre:
 *           type: string
 *           description: El nombre del autor
 *         apellido:
 *           type: string
 *           description: El apellido del autor
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
router.post('/', autorController_1.insertarAutor);
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
router.get('/', autorController_1.listarAutores);
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
router.get('/:id', autorController_1.obtenerAutor);
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
router.put('/:id', autorController_1.modificarAutor);
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
router.patch('/:id', autorController_1.eliminarAutor);
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
exports.default = router;
//# sourceMappingURL=autorRoute.js.map