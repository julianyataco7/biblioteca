import Joi from "joi";
import { foraneoUsuarioSchema } from "./usuarioSchema";
import {modificarEjemplarSchema } from "./ejemplarSchema";
const prestamoBaseSchema = {
    idPrestamo: Joi.number().integer(),
    Usuario: foraneoUsuarioSchema, 
    Ejemplar: modificarEjemplarSchema, 
    fechaReserva: Joi.date().allow(null).optional(),
    fechaPrestamo: Joi.date().allow(null).optional(),
    fechaEstimadaDevolucion: Joi.date().allow(null).optional(),
    fechaDevolucion: Joi.date().allow(null).optional(),
    estado: Joi.string().optional().max(50),
    fechaModificacion: Joi.date().allow(null).optional()
};

export const insertarPrestamoSchema = Joi.object({
    ...prestamoBaseSchema,
    Usuario: prestamoBaseSchema.Usuario.required(),
    Ejemplar: prestamoBaseSchema.Ejemplar.required(),
    estado: prestamoBaseSchema.estado.required()
});

export const modificarPrestamoSchema = Joi.object({
    ...prestamoBaseSchema
});
