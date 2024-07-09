"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarEjemplarSchema = exports.insertarEjemplarSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const libroSchema_1 = require("./libroSchema"); // Importar el esquema de libro si es necesario
const ejemplarBaseSchema = {
    idEjemplar: joi_1.default.number().integer(),
    fechaCreacion: joi_1.default.date().allow(null).optional(),
    libro: libroSchema_1.modificarLibroSchema, // Utiliza el esquema de libro aquí, ajusta según sea necesario
    conservacion: joi_1.default.string().max(50),
    disponibilidad: joi_1.default.number().integer(),
    fechaModificacion: joi_1.default.date().allow(null).optional(),
};
// Esquema para insertar un ejemplar
exports.insertarEjemplarSchema = joi_1.default.object(Object.assign(Object.assign({}, ejemplarBaseSchema), { libro: ejemplarBaseSchema.libro.required(), conservacion: ejemplarBaseSchema.conservacion.required(), disponibilidad: ejemplarBaseSchema.disponibilidad.required() }));
// Esquema para modificar un ejemplar (permite opcionales)
exports.modificarEjemplarSchema = joi_1.default.object(Object.assign({}, ejemplarBaseSchema));
//# sourceMappingURL=ejemplarSchema.js.map