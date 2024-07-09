"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarPrestamoSchema = exports.insertarPrestamoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const usuarioSchema_1 = require("./usuarioSchema");
const ejemplarSchema_1 = require("./ejemplarSchema");
const prestamoBaseSchema = {
    idPrestamo: joi_1.default.number().integer(),
    Usuario: usuarioSchema_1.foraneoUsuarioSchema,
    Ejemplar: ejemplarSchema_1.modificarEjemplarSchema,
    fechaReserva: joi_1.default.date().allow(null).optional(),
    fechaPrestamo: joi_1.default.date().allow(null).optional(),
    fechaEstimadaDevolucion: joi_1.default.date().allow(null).optional(),
    fechaDevolucion: joi_1.default.date().allow(null).optional(),
    estado: joi_1.default.string().optional().max(50),
    fechaModificacion: joi_1.default.date().allow(null).optional()
};
exports.insertarPrestamoSchema = joi_1.default.object(Object.assign(Object.assign({}, prestamoBaseSchema), { Usuario: prestamoBaseSchema.Usuario.required(), Ejemplar: prestamoBaseSchema.Ejemplar.required(), estado: prestamoBaseSchema.estado.required() }));
exports.modificarPrestamoSchema = joi_1.default.object(Object.assign({}, prestamoBaseSchema));
//# sourceMappingURL=prestamoSchema.js.map