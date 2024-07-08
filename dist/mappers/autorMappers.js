"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaAutor = exports.fromPrismaAutor = void 0;
const fromPrismaAutor = (autor) => ({
    idAutor: autor.id_autor,
    fechaCreacion: autor.fecha_creacion,
    nombre: autor.nombre,
    apellido_paterno: autor.apellido_paterno,
    apellido_materno: autor.apellido_materno,
    nacionalidad: autor.nacionalidad,
    estado: autor.estado,
    fechaModificacion: autor.fecha_modificacion,
});
exports.fromPrismaAutor = fromPrismaAutor;
const toPrismaAutor = (autor) => ({
    id_autor: autor.idAutor,
    nombre: autor.nombre,
    apellido_paterno: autor.apellidoPaterno,
    nacionalidad: autor.nacionalidad,
    estado: autor.estado,
    fecha_modificacion: autor.fechaModificacion,
    apellido_materno: autor.apellidoMaterno,
    fecha_creacion: autor.fechaCreacion
});
exports.toPrismaAutor = toPrismaAutor;
//# sourceMappingURL=autorMappers.js.map