"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaEjemplar = exports.fromPrismaEjemplar = void 0;
const libroMappers_1 = require("./libroMappers");
const fromPrismaEjemplar = (ejemplar, libro, autor) => ({
    idEjemplar: ejemplar.id_ejemplar,
    libro: (0, libroMappers_1.fromPrismaLibro)(libro, autor),
    conservacion: ejemplar.conservacion,
    disponibilidad: ejemplar.disponibilidad,
    fechaModificacion: ejemplar.fecha_modificacion,
});
exports.fromPrismaEjemplar = fromPrismaEjemplar;
const toPrismaEjemplar = (ejemplar) => ({
    id_libro: ejemplar.libro.idLibro,
    conservacion: ejemplar.conservacion,
    disponibilidad: ejemplar.disponibilidad,
    fecha_modificacion: ejemplar.fechaModificacion,
});
exports.toPrismaEjemplar = toPrismaEjemplar;
//# sourceMappingURL=ejemplarMappers.js.map