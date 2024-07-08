import { ejemplares,libros,autores } from "@prisma/client";
import { IEjemplar } from "../models/Ejemplar";
import { fromPrismaLibro } from "./libroMappers";

export const fromPrismaEjemplar = (ejemplar: ejemplares,libro: libros,autor: autores): IEjemplar => ({
  idEjemplar: ejemplar.id_ejemplar,
  fechaCreacion:ejemplar.fecha_creacion,
  libro: fromPrismaLibro(libro,autor),
  conservacion: ejemplar.conservacion,
  disponibilidad: ejemplar.disponibilidad,
  fechaModificacion: ejemplar.fecha_modificacion,
});

export const toPrismaEjemplar = (ejemplar: IEjemplar): any => ({
  id_libro: ejemplar.libro.idLibro,
  conservacion: ejemplar.conservacion,
  disponibilidad: ejemplar.disponibilidad,
  fecha_modificacion: ejemplar.fechaModificacion,
  fecha_creacion: ejemplar.fechaCreacion
});
