"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaAutor = exports.fromPrismaAutor = void 0;
const fromPrismaAutor = (autor) => ({
    idAutor: autor.id_autor,
    nombre: autor.nombre,
    apellido: autor.apellido,
    nacionalidad: autor.nacionalidad,
    estado: autor.estado,
    fechaModificacion: autor.fecha_modificacion,
});
exports.fromPrismaAutor = fromPrismaAutor;
const toPrismaAutor = (autor) => ({
    id_autor: autor.idAutor,
    nombre: autor.nombre,
    apellido: autor.apellido,
    nacionalidad: autor.nacionalidad,
    estado: autor.estado,
    fecha_modificacion: autor.fechaModificacion,
});
exports.toPrismaAutor = toPrismaAutor;
//# sourceMappingURL=autorMappers.js.map