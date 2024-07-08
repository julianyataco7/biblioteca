"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaLibro = exports.fromPrismaLibro = void 0;
const autorMappers_1 = require("../mappers/autorMappers");
const fromPrismaLibro = (libro, autores) => ({
    idLibro: libro.id_libro,
    Autor: (0, autorMappers_1.fromPrismaAutor)(autores),
    nombre: libro.nombre,
    categoria: libro.categoria,
    editorial: libro.editorial,
    estado: libro.estado,
    fechaCreacion: libro.fecha_creacion,
    fechaModificacion: libro.fecha_modificacion
});
exports.fromPrismaLibro = fromPrismaLibro;
const toPrismaLibro = (libro) => ({
    id_autor: libro.Autor.idAutor,
    nombre: libro.nombre,
    categoria: libro.categoria,
    editorial: libro.editorial,
    estado: libro.estado,
    fecha_creacion: libro.fechaCreacion,
    fecha_modificacion: libro.fechaModificacion
});
exports.toPrismaLibro = toPrismaLibro;
//# sourceMappingURL=libroMappers.js.map