"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarInfraccionSchema = exports.insertarInfraccionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const prestamoSchema_1 = require("./prestamoSchema");
const tipoInfraccionSchema_1 = require("./tipoInfraccionSchema");
const infraccionBaseSchema = {
    idInfraccion: joi_1.default.number().integer(),
    fechaCreacion: joi_1.default.date().allow(null),
    prestamo: prestamoSchema_1.modificarPrestamoSchema,
    tipoInfraccion: tipoInfraccionSchema_1.modificarTipoInfraccionSchema,
    multa: joi_1.default.string().optional().max(100),
    estado: joi_1.default.string().optional().max(50),
    fechaModificacion: joi_1.default.date().allow(null)
};
// Esquema para insertar una infracción
exports.insertarInfraccionSchema = joi_1.default.object(Object.assign(Object.assign({}, infraccionBaseSchema), { fechaCreacion: infraccionBaseSchema.fechaCreacion.required(), prestamo: infraccionBaseSchema.prestamo.required(), tipoInfraccion: infraccionBaseSchema.tipoInfraccion.required() }));
// Esquema para modificar una infracción (permite opcionales)
exports.modificarInfraccionSchema = joi_1.default.object(Object.assign({}, infraccionBaseSchema));
//# sourceMappingURL=infraccionSchema.js.map