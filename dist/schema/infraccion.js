"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarInfraccionSchema = exports.insertarInfraccionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
//import { prestamoBaseSchema } from "./Prestamo"; // Importa el esquema de prestamo si es necesario
//import { tipoInfraccionBaseSchema } from "./TipoInfraccion"; // Importa el esquema de tipoInfraccion si es necesario
const infraccionBaseSchema = {
    idInfraccion: joi_1.default.number().integer(),
    fechaCreacion: joi_1.default.date().allow(null), // Permitir null como valor válido para fechaCreacion
    // prestamo: prestamoBaseSchema, // Utiliza el esquema de prestamo aquí, ajusta según sea necesario
    // tipoInfraccion: tipoInfraccionBaseSchema, // Utiliza el esquema de tipoInfraccion aquí, ajusta según sea necesario
    multa: joi_1.default.string().optional().max(100), // Multa es opcional
    estado: joi_1.default.string().optional().max(50), // Estado es opcional
    fechaModificacion: joi_1.default.date().allow(null) // Permitir null como valor válido para fechaModificacion
};
// Esquema para insertar una infracción
exports.insertarInfraccionSchema = joi_1.default.object(Object.assign(Object.assign({}, infraccionBaseSchema), { idInfraccion: infraccionBaseSchema.idInfraccion.required(), fechaCreacion: infraccionBaseSchema.fechaCreacion.required() }));
// Esquema para modificar una infracción (permite opcionales)
exports.modificarInfraccionSchema = joi_1.default.object(Object.assign({}, infraccionBaseSchema));
//# sourceMappingURL=infraccion.js.map