"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaLibro = exports.fromPrismaLibro = void 0;
const fromPrismaLibro = (libro) => ({
    idLibro: libro.id_libro,
    autor: libro.id_autor,
    nombre: libro.nombre,
    categoria: libro.categoria,
    editorial: libro.editorial,
    estado: libro.estado,
    fechaModificacion: libro.fecha_modificacion,
});
exports.fromPrismaLibro = fromPrismaLibro;
const toPrismaLibro = (libro) => ({
    id_autor: libro.autor,
    nombre: libro.nombre,
    categoria: libro.categoria,
    editorial: libro.editorial,
    estado: libro.estado,
    fecha_modificacion: libro.fechaModificacion,
});
exports.toPrismaLibro = toPrismaLibro;
//# sourceMappingURL=libroMappers.js.map