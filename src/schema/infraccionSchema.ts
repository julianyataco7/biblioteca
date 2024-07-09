import Joi from "joi";
import { modificarPrestamoSchema } from "./prestamoSchema";
import { modificarTipoInfraccionSchema } from "./tipoInfraccionSchema";


const infraccionBaseSchema = {
    idInfraccion: Joi.number().integer(),
    fechaCreacion: Joi.date().allow(null), 
    prestamo: modificarPrestamoSchema, 
    tipoInfraccion: modificarTipoInfraccionSchema, 
    multa: Joi.string().optional().max(100), 
    estado: Joi.string().optional().max(50), 
    fechaModificacion: Joi.date().allow(null) 
};

// Esquema para insertar una infracción
export const insertarInfraccionSchema = Joi.object({
    ...infraccionBaseSchema,

    fechaCreacion: infraccionBaseSchema.fechaCreacion.required(),
    prestamo: infraccionBaseSchema.prestamo.required(),
    tipoInfraccion: infraccionBaseSchema.tipoInfraccion.required()
});

// Esquema para modificar una infracción (permite opcionales)
export const modificarInfraccionSchema = Joi.object({
    ...infraccionBaseSchema
});
