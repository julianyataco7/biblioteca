"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foraneaAutorSchema = exports.modificarAutorSchema = exports.insertarAutorSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const autorBaseSchema = {
    idAutor: joi_1.default.number().integer().optional(),
    nombre: joi_1.default.string().optional().max(100),
    fechaCreacion: joi_1.default.date().allow(null).optional(),
    apellidoPaterno: joi_1.default.string().optional().max(100),
    apellidoMaterno: joi_1.default.string().optional().max(100),
    nacionalidad: joi_1.default.string().optional().max(50),
    estado: joi_1.default.string().optional().max(50),
    fechaModificacion: joi_1.default.date().allow(null).optional(),
};
exports.insertarAutorSchema = joi_1.default.object(Object.assign(Object.assign({}, autorBaseSchema), { nombre: autorBaseSchema.nombre.required(), apellidoPaterno: autorBaseSchema.apellidoPaterno.required(), apellidoMaterno: autorBaseSchema.apellidoMaterno.required(), nacionalidad: autorBaseSchema.nacionalidad.required(), estado: autorBaseSchema.estado.required() }));
exports.modificarAutorSchema = joi_1.default.object(Object.assign({}, autorBaseSchema));
exports.foraneaAutorSchema = joi_1.default.object(Object.assign({}, autorBaseSchema));
//# sourceMappingURL=AutorSchema.js.map