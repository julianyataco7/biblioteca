import Joi from "joi";
import { foraneoUsuarioSchema } from "./usuarioSchema";
import { modificarPrestamoSchema } from "./prestamoSchema";

const comprobanteBaseSchema = {
    idComprobante: Joi.number().integer(),
    numeroComprobante: Joi.number().allow(null).integer(),
    usuario: foraneoUsuarioSchema, 
    prestamo: modificarPrestamoSchema, 
    fechaCreacion: Joi.date().allow(null).optional(),
    fechaModificacion: Joi.date().allow(null).optional()
};

export const insertarComprobanteSchema = Joi.object({
    ...comprobanteBaseSchema,
    usuario: comprobanteBaseSchema.usuario.required(),
    prestamo: comprobanteBaseSchema.prestamo.required()
});

export const modificarComprobanteSchema = Joi.object({
    ...comprobanteBaseSchema
});
