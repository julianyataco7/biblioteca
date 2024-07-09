import Joi from "joi";

const tipoInfraccionBaseSchema = {
    idTipoInfraccion: Joi.number().integer(),
    descripcion: Joi.string().allow(null).max(255),
    penalizacionMonto: Joi.number().allow(null).min(0),
    fechaCreacion: Joi.date().allow(null),
    fechaModificacion: Joi.date().allow(null)
};

export const insertarTipoInfraccionSchema = Joi.object({
    ...tipoInfraccionBaseSchema,
    descripcion: tipoInfraccionBaseSchema.descripcion.required(),
    penalizacionMonto: tipoInfraccionBaseSchema.penalizacionMonto.required()
});

export const modificarTipoInfraccionSchema = Joi.object({
    ...tipoInfraccionBaseSchema
});