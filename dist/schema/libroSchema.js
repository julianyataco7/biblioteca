"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarLibroSchema = exports.insertarLibroSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const AutorSchema_1 = require("./AutorSchema");
const libroBaseSchema = {
    idLibro: joi_1.default.number().integer(),
    Autor: AutorSchema_1.foraneaAutorSchema,
    nombre: joi_1.default.string().max(200),
    categoria: joi_1.default.string().max(100),
    editorial: joi_1.default.string().max(100),
    estado: joi_1.default.string().max(50),
    fechaCreacion: joi_1.default.date().allow(null).optional(),
    fechaModificacion: joi_1.default.date().allow(null).optional(),
};
// Esquema para insertar un libro
exports.insertarLibroSchema = joi_1.default.object(Object.assign(Object.assign({}, libroBaseSchema), { Autor: libroBaseSchema.Autor.required(), nombre: libroBaseSchema.nombre.required(), categoria: libroBaseSchema.categoria.required(), editorial: libroBaseSchema.editorial.required(), estado: libroBaseSchema.estado.required() }));
// Esquema para modificar un libro (permite opcionales)
exports.modificarLibroSchema = joi_1.default.object(Object.assign({}, libroBaseSchema));
//# sourceMappingURL=libroSchema.js.map