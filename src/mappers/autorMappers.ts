import { autores } from "@prisma/client";
import { IAutor } from "../models/Autor";



export const fromPrismaAutor = (autor: autores): any => ({
  idAutor: autor.id_autor,
  nombre: autor.nombre,
  apellido: autor.apellido,
  nacionalidad: autor.nacionalidad,
  estado: autor.estado,
  fechaModificacion: autor.fecha_modificacion,


});

export const toPrismaAutor = (autor: IAutor): any => ({
  id_autor: autor.idAutor,
  nombre: autor.nombre,
  apellido: autor.apellido,
  nacionalidad: autor.nacionalidad,
  estado: autor.estado,
  fecha_modificacion: autor.fechaModificacion,
});