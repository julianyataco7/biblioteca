import { usuarios } from "@prisma/client";
import { IUsuario } from "../models/Usuario";

export const fromPrismaUsuario = (usuario: usuarios): any=> ({
  idUsuario: usuario.id_usuario,
  idRol: usuario.id_rol,
  username: usuario.username,
  password: usuario.password,
  nombre: usuario.nombre,
  apellido: usuario.apellido,
  edad: usuario.edad,
  direccion: usuario.direccion,
  distrito: usuario.distrito,
  estado: usuario.estado,
  fechaModificacion: usuario.fecha_modificacion
});

export const toPrismaUsuario = (usuario: IUsuario): any => ({
  id_usuario: usuario.idUsuario,
  id_rol: usuario.idRol,
  username: usuario.username,
  password: usuario.password,
  nombre: usuario.nombre,
  apellido: usuario.apellido,
  edad: usuario.edad,
  direccion: usuario.direccion,
  distrito: usuario.distrito,
  estado: usuario.estado,
  fecha_modificacion: usuario.fechaModificacion
})