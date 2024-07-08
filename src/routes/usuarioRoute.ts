import express from 'express';
import { eliminarUsuario, insertarUsuario, listarUsuarios, modificarUsuario, obtenerUsuario } from '../controller/usuarioController';

const router = express.Router();

// creamos el tag
/**
 * @swagger
 * tags:
 *   name: Usuarios
 */

// creamos el schema usuario
/**
 * @swagger
 * components:
 *   schemas:
 *     usuarioModel:
 *       type: object
 *       properties:
 *         idUsuario:
 *           type: integer
 *           description: Identificador único del usuario
 *         idRol:
 *           type: integer
 *           description: Identificador del rol del usuario
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la creacion registro del usuario
 *         username:
 *           type: string
 *           description: Nombre de usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         apellidoPaterno:
 *           type: string
 *           description: Apellido paterno del usuario
 *         apellidoMaterno:
 *           type: string
 *           description: Apellido materno del usuario
 *         edad:
 *           type: integer
 *           description: Edad del usuario
 *         direccion:
 *           type: string
 *           description: Dirección del usuario
 *         distrito:
 *           type: string
 *           description: Distrito del usuario
 *         estado:
 *           type: string
 *           description: Estado del usuario
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última modificación del registro del usuario
 *         
 */

// Ruta para insertar usuario
router.post('/', insertarUsuario);
/**
 * @swagger
 * /api/v1/usuarios/:
 *   post:
 *     summary: Insertar un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       description: Esquema del Usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/usuarioModel'
 *     responses:
 *       200:
 *         description: Usuario insertado con éxito
 *       500:
 *         description: Error en el servidor
 */

// Ruta para listar usuarios
router.get('/', listarUsuarios);
/**
 * @swagger
 * /api/v1/usuarios/:
 *   get:
 *     summary: Obtener la lista de usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Listado obtenido con éxito
 *       500:
 *         description: Error en el servidor
 *       404:
 *         description: Usuario no existente
 */

// Ruta para obtener usuario por id
router.get('/:id', obtenerUsuario);
/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por id
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del usuario que desea obtener
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Usuario obtenido con éxito
 *       500:
 *         description: Error en el servidor
 */

// Ruta para modificar usuario
router.put('/:id', modificarUsuario);
/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   put:
 *     summary: Modificar un Usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del usuario que desea modificar
 *     requestBody:
 *       description: Esquema del Usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/usuarioModel'
 *     responses:
 *       200:
 *         description: Usuario modificado con éxito
 *       500:
 *         description: Error en el servidor
 */

// Ruta para eliminar usuario (forma lógica)
router.patch('/:id', eliminarUsuario);
/**
 * @swagger
 * /api/v1/usuarios/{id}:
 *   patch:
 *     summary: Eliminar un usuario (forma lógica)
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del usuario que desea eliminar
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito
 *       500:
 *         description: Error en el servidor
 */

export default router;

