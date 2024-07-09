import Joi from "joi";
import { modificarLibroSchema } from "./libroSchema"; // Importar el esquema de libro si es necesario

const ejemplarBaseSchema = {
    idEjemplar: Joi.number().integer(),
    fechaCreacion: Joi.date().allow(null).optional(),
    libro: modificarLibroSchema, // Utiliza el esquema de libro aquí, ajusta según sea necesario
    conservacion: Joi.string().max(50),
    disponibilidad: Joi.number().integer(),
    fechaModificacion: Joi.date().allow(null).optional(),
};

// Esquema para insertar un ejemplar
export const insertarEjemplarSchema = Joi.object({
    ...ejemplarBaseSchema,
    libro: ejemplarBaseSchema.libro.required(),
    conservacion: ejemplarBaseSchema.conservacion.required(),
    disponibilidad: ejemplarBaseSchema.disponibilidad.required(),
});

// Esquema para modificar un ejemplar (permite opcionales)
export const modificarEjemplarSchema = Joi.object({
    ...ejemplarBaseSchema
});
