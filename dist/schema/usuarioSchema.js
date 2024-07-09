"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foraneoUsuarioSchema = exports.modificarUsuarioSchema = exports.insertarUsuarioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const usuarioBaseSchema = {
    idUsuario: joi_1.default.number().integer(),
    idRol: joi_1.default.number().integer().required(),
    fechaCreacion: joi_1.default.date().allow(null).optional(),
    username: joi_1.default.string().max(50).required(),
    password: joi_1.default.string().min(8).max(100).required(),
    nombre: joi_1.default.string().max(100).required(),
    apellidoPaterno: joi_1.default.string().max(100).required(),
    apellidoMaterno: joi_1.default.string().max(100).required(),
    edad: joi_1.default.number().integer().min(0).required(),
    direccion: joi_1.default.string().max(255).required(),
    distrito: joi_1.default.string().max(100).required(),
    estado: joi_1.default.string().max(50).required(),
    fechaModificacion: joi_1.default.date().allow(null).optional(),
};
// Esquema para insertar un usuario
exports.insertarUsuarioSchema = joi_1.default.object(Object.assign(Object.assign({}, usuarioBaseSchema), { idRol: usuarioBaseSchema.idRol.required(), username: usuarioBaseSchema.username.required(), password: usuarioBaseSchema.password.required(), nombre: usuarioBaseSchema.nombre.required(), apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(), apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(), edad: usuarioBaseSchema.edad.required(), direccion: usuarioBaseSchema.direccion.required(), distrito: usuarioBaseSchema.distrito.required(), estado: usuarioBaseSchema.estado.required() }));
// Esquema para modificar un usuario (permite opcionales)
exports.modificarUsuarioSchema = joi_1.default.object(Object.assign({}, usuarioBaseSchema));
exports.foraneoUsuarioSchema = joi_1.default.object(Object.assign(Object.assign({}, usuarioBaseSchema), { password: usuarioBaseSchema.password.min(0).optional() }));
//# sourceMappingURL=usuarioSchema.js.map