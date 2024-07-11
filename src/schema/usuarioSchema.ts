import Joi from "joi";

const usuarioBaseSchema = {
    idUsuario:Joi.number().integer(),
    idRol: Joi.number().integer().required(),
    fechaCreacion: Joi.date().allow(null).optional(),
    username: Joi.string().max(50).required(),
    password: Joi.string().min(8).max(100).required(),
    nombre: Joi.string().max(100).required(),
    apellidoPaterno: Joi.string().max(100).required(),
    apellidoMaterno: Joi.string().max(100).required(),
    edad: Joi.number().integer().min(0).required(),
    direccion: Joi.string().max(255).required(),
    distrito: Joi.string().max(100).required(),
    estado: Joi.string().max(50).required(),
    fechaModificacion: Joi.date().allow(null).optional(),

};

// Esquema para insertar un usuario
export const insertarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema,
    idRol: usuarioBaseSchema.idRol.required(),
    username: usuarioBaseSchema.username.required(),
    password: usuarioBaseSchema.password.required(),
    nombre: usuarioBaseSchema.nombre.required(),
    apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(),
    edad: usuarioBaseSchema.edad.required(),
    direccion: usuarioBaseSchema.direccion.required(),
    distrito: usuarioBaseSchema.distrito.required(),
    estado: usuarioBaseSchema.estado.required(),
});


export const modificarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema
});

export const foraneoUsuarioSchema = Joi.object({
    ...usuarioBaseSchema,
    password: usuarioBaseSchema.password.min(0).optional()
});
