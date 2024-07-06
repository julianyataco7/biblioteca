"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaPrestamo = exports.fromPrismaPrestamo = void 0;
const ejemplarMappers_1 = require("./ejemplarMappers");
const usuarioMappers_1 = require("./usuarioMappers");
const fromPrismaPrestamo = (prestamo, ejemplares, usuarios, libros, autores) => ({
    idPrestamo: prestamo.id_prestamo,
    Usuario: (0, usuarioMappers_1.fromPrismaUsuario)(usuarios),
    Ejemplar: (0, ejemplarMappers_1.fromPrismaEjemplar)(ejemplares, libros, autores),
    fechaReserva: prestamo.fecha_reserva,
    fechaPrestamo: prestamo.fecha_prestamo,
    fechaEstimada_devolucion: prestamo.fecha_estimada_devolucion,
    fechaDevolucion: prestamo.fecha_devolucion,
    estado: prestamo.estado,
    fechaModificacion: prestamo.fecha_modificacion
});
exports.fromPrismaPrestamo = fromPrismaPrestamo;
const toPrismaPrestamo = (prestamo) => ({
    id_usuario: prestamo.Usuario.idUsuario,
    id_ejemplar: prestamo.Ejemplar.idEjemplar,
    fecha_reserva: prestamo.fechaReserva,
    fecha_prestamo: prestamo.fechaPrestamo,
    fecha_estimada_devolucion: prestamo.fechaEstimadaDevolucion,
    fecha_devolucion: prestamo.fechaDevolucion,
    estado: prestamo.estado,
    fecha_modificacion: prestamo.fechaModificacion
});
exports.toPrismaPrestamo = toPrismaPrestamo;
//# sourceMappingURL=prestamoMappers.js.map