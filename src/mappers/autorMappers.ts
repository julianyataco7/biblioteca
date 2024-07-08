import { autores } from "@prisma/client";
import { IAutor } from "../models/Autor";



export const fromPrismaAutor = (autor: autores): any => ({
  idAutor: autor.id_autor,
  fechaCreacion:autor.fecha_creacion,
  nombre: autor.nombre,
  apellido_paterno: autor.apellido_paterno,
  apellido_materno: autor.apellido_materno,
  nacionalidad: autor.nacionalidad,
  estado: autor.estado,
  fechaModificacion: autor.fecha_modificacion,


});

export const toPrismaAutor = (autor: IAutor): any => ({
  id_autor: autor.idAutor,
  nombre: autor.nombre,
  apellido_paterno: autor.apellidoPaterno,
  nacionalidad: autor.nacionalidad,
  estado: autor.estado,
  fecha_modificacion: autor.fechaModificacion,
  apellido_materno: autor.apellidoMaterno,
  fecha_creacion: autor.fechaCreacion
});