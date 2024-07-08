"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaUsuario = exports.fromPrismaUsuario = void 0;
const fromPrismaUsuario = (usuario) => ({
    idUsuario: usuario.id_usuario,
    idRol: usuario.id_rol,
    fechaCreacion: usuario.fecha_creacion,
    username: usuario.username,
    password: usuario.password,
    nombre: usuario.nombre,
    apellido_paterno: usuario.apellido_paterno,
    apellido_materno: usuario.apellido_materno,
    edad: usuario.edad,
    direccion: usuario.direccion,
    distrito: usuario.distrito,
    estado: usuario.estado,
    fechaModificacion: usuario.fecha_modificacion,
});
exports.fromPrismaUsuario = fromPrismaUsuario;
const toPrismaUsuario = (usuario) => ({
    id_usuario: usuario.idUsuario,
    id_rol: usuario.idRol,
    username: usuario.username,
    password: usuario.password,
    nombre: usuario.nombre,
    apellido_paterno: usuario.apellidoPaterno,
    edad: usuario.edad,
    direccion: usuario.direccion,
    distrito: usuario.distrito,
    estado: usuario.estado,
    fecha_modificacion: usuario.fechaModificacion,
    apellido_materno: usuario.apellidoMaterno,
    fecha_creacion: usuario.fechaCreacion
});
exports.toPrismaUsuario = toPrismaUsuario;
//# sourceMappingURL=usuarioMappers.js.map