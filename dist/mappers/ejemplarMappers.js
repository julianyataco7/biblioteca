"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaEjemplar = exports.fromPrismaEjemplar = void 0;
const fromPrismaEjemplar = (ejemplar) => ({
    idEjemplar: ejemplar.id_ejemplar,
    libro: ejemplar.id_libro,
    conservacion: ejemplar.conservacion,
    disponibilidad: ejemplar.disponibilidad,
    fechaModificacion: ejemplar.fecha_modificacion,
});
exports.fromPrismaEjemplar = fromPrismaEjemplar;
const toPrismaEjemplar = (ejemplar) => ({
    id_libro: ejemplar.libro,
    conservacion: ejemplar.conservacion,
    disponibilidad: ejemplar.disponibilidad,
    fecha_modificacion: ejemplar.fechaModificacion,
});
exports.toPrismaEjemplar = toPrismaEjemplar;
//# sourceMappingURL=ejemplarMappers.js.map