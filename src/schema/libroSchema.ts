import Joi from "joi";
import { foraneaAutorSchema } from "./AutorSchema";

const libroBaseSchema = {
    idLibro: Joi.number().integer(),
    Autor: foraneaAutorSchema,
    nombre: Joi.string().max(200),
    categoria: Joi.string().max(100),
    editorial: Joi.string().max(100),
    estado: Joi.string().max(50),
    fechaCreacion: Joi.date().allow(null).optional(),
    fechaModificacion: Joi.date().allow(null).optional(),
};

// Esquema para insertar un libro
export const insertarLibroSchema = Joi.object({
    ...libroBaseSchema,
    Autor: libroBaseSchema.Autor.required(),
    nombre: libroBaseSchema.nombre.required(),
    categoria: libroBaseSchema.categoria.required(),
    editorial: libroBaseSchema.editorial.required(),
    estado: libroBaseSchema.estado.required(),

});

// Esquema para modificar un libro (permite opcionales)
export const modificarLibroSchema = Joi.object({
    ...libroBaseSchema
});

