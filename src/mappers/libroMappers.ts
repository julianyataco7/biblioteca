import { libros } from "@prisma/client";
import { ILibro } from "../models/Libro";

export const fromPrismaLibro = (libro: libros): any => ({
  idLibro: libro.id_libro,
  idAutor: libro.id_autor,
  nombre: libro.nombre,
  categoria: libro.categoria,
  editorial: libro.editorial,
  estado: libro.estado,
  fechaModificacion: libro.fecha_modificacion
});

export const toPrismaLibro = (libro: ILibro): any => ({
  id_autor: libro.idAutor,
  nombre: libro.nombre,
  categoria: libro.categoria,
  editorial: libro.editorial,
  estado: libro.estado,
  fecha_modificacion: libro.fechaModificacion
});