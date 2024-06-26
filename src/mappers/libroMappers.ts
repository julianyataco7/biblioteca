import { libros } from "@prisma/client";
import { autores } from "@prisma/client";
import { ILibro } from "../models/Libro";
import {fromPrismaAutor} from "../mappers/autorMappers"

export const fromPrismaLibro = (libro: libros,autores:autores): any => ({
  idLibro: libro.id_libro,
  Autor: fromPrismaAutor(autores),
  nombre: libro.nombre,
  categoria: libro.categoria,
  editorial: libro.editorial,
  estado: libro.estado,
  fechaModificacion: libro.fecha_modificacion
});

export const toPrismaLibro = (libro: ILibro): any => ({
  id_autor: libro.Autor.idAutor,
  nombre: libro.nombre,
  categoria: libro.categoria,
  editorial: libro.editorial,
  estado: libro.estado,
  fecha_modificacion: libro.fechaModificacion
});