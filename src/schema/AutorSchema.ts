import Joi from "joi";

const autorBaseSchema = {
    idAutor:  Joi.number().integer().optional(),
    nombre: Joi.string().optional().max(100),
    fechaCreacion: Joi.date().allow(null).optional(),
    apellidoPaterno: Joi.string().optional().max(100),
    apellidoMaterno: Joi.string().optional().max(100),
    nacionalidad: Joi.string().optional().max(50),
    estado: Joi.string().optional().max(50),
    fechaModificacion: Joi.date().allow(null).optional(),

};

export const insertarAutorSchema = Joi.object({
    ...autorBaseSchema,
    nombre: autorBaseSchema.nombre.required(),
    apellidoPaterno: autorBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: autorBaseSchema.apellidoMaterno.required(),
    nacionalidad: autorBaseSchema.nacionalidad.required(),
    estado: autorBaseSchema.estado.required()
});

export const modificarAutorSchema = Joi.object({
    ...autorBaseSchema
});

export const foraneaAutorSchema = Joi.object({
    ...autorBaseSchema,
});

