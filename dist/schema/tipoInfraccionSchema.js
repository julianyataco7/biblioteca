"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarTipoInfraccionSchema = exports.insertarTipoInfraccionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const tipoInfraccionBaseSchema = {
    idTipoInfraccion: joi_1.default.number().integer(),
    descripcion: joi_1.default.string().allow(null).max(255),
    penalizacionMonto: joi_1.default.number().allow(null).min(0),
    fechaCreacion: joi_1.default.date().allow(null),
    fechaModificacion: joi_1.default.date().allow(null)
};
exports.insertarTipoInfraccionSchema = joi_1.default.object(Object.assign(Object.assign({}, tipoInfraccionBaseSchema), { descripcion: tipoInfraccionBaseSchema.descripcion.required(), penalizacionMonto: tipoInfraccionBaseSchema.penalizacionMonto.required() }));
exports.modificarTipoInfraccionSchema = joi_1.default.object(Object.assign({}, tipoInfraccionBaseSchema));
//# sourceMappingURL=tipoInfraccionSchema.js.map