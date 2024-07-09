"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarComprobanteSchema = exports.insertarComprobanteSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const usuarioSchema_1 = require("./usuarioSchema");
const prestamoSchema_1 = require("./prestamoSchema");
const comprobanteBaseSchema = {
    idComprobante: joi_1.default.number().integer(),
    numeroComprobante: joi_1.default.number().allow(null).integer(),
    usuario: usuarioSchema_1.foraneoUsuarioSchema,
    prestamo: prestamoSchema_1.modificarPrestamoSchema,
    fechaCreacion: joi_1.default.date().allow(null).optional(),
    fechaModificacion: joi_1.default.date().allow(null).optional()
};
exports.insertarComprobanteSchema = joi_1.default.object(Object.assign(Object.assign({}, comprobanteBaseSchema), { usuario: comprobanteBaseSchema.usuario.required(), prestamo: comprobanteBaseSchema.prestamo.required() }));
exports.modificarComprobanteSchema = joi_1.default.object(Object.assign({}, comprobanteBaseSchema));
//# sourceMappingURL=comprobanteSchema.js.map