"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaUsuario = exports.fromPrismaUsuario = void 0;
const fromPrismaUsuario = (usuario) => ({
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
exports.fromPrismaUsuario = fromPrismaUsuario;
const toPrismaUsuario = (usuario) => ({
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
});
exports.toPrismaUsuario = toPrismaUsuario;
//# sourceMappingURL=usuarioMappers.js.map