"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const libroController_1 = require("../controller/libroController");
const router = express_1.default.Router();
// creamos el tag
/**
 * @swagger
 * tags:
 *   name: Libros
 */
// Creamos el schema libro
/**
 * @swagger
 * components:
 *   schemas:
 *     libroModel:
 *       type: object
 *       properties:
 *         idLibro:
 *           type: integer
 *           description: Identificador único del libro
 *         Autor:
 *           $ref: '#/components/schemas/autorModel'
 *           description: Información del autor del libro
 *         nombre:
 *           type: string
 *           description: Nombre del libro
 *         categoria:
 *           type: string
 *           description: Categoría o género del libro
 *         editorial:
 *           type: string
 *           description: Editorial que publicó el libro
 *         estado:
 *           type: string
 *           description: Estado actual del libro (e.g., Disponible, Prestado)
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del registro del libro
 */
router.post('/', libroController_1.insertarLibro);
/**
 * @swagger
 * /api/v1/libros/:
 *   post:
 *     summary: Insertar un libro
 *     tags: [Libros]
 *     requestBody:
 *       description: Esquema del Libro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/libroModel'
 *     responses:
 *       200:
 *         description: Libro insertado con éxito
 *       500:
 *         description: Error en el servidor
 */
router.get('/', libroController_1.listarLibros);
/**
 * @swagger
 * /api/v1/libros/:
 *   get:
 *     summary: Obtener la lista de libros
 *     tags:
 *       - Libros
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: Libro no existente
 */
router.get('/:id', libroController_1.obtenerLibro);
/**
 * @swagger
 * /api/v1/libros/{id}:
 *   get:
 *     summary: Obtener un libro por id
 *     tags:
 *       - Libros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del libro que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Libro obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', libroController_1.modificarLibro);
/**
 * @swagger
 * /api/v1/libros/{id}:
 *   put:
 *     summary: Modificar un libro
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del libro que desea modificar
 *     requestBody:
 *       description: Esquema del Libro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/libroModel'
 *     responses:
 *       200:
 *         description: Libro modificado con éxito
 *       500:
 *         description: Error en el servidor
 */
router.patch('/:id', libroController_1.eliminarLibro);
/**
 * @swagger
 * /api/v1/libros/{id}:
 *   patch:
 *     summary: Eliminar un libro (forma logica)
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del libro que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Libro eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */
exports.default = router;
//# sourceMappingURL=libroRoute.js.map