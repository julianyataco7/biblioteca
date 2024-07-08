"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaInfraccion = exports.fromPrismaInfraccion = void 0;
const prestamoMappers_1 = require("./prestamoMappers");
const tipoInfraccionMappers_1 = require("./tipoInfraccionMappers");
const fromPrismaInfraccion = (infraccion, prestamo, ejemplar, usuario, libro, autor, tipoInfraccion) => ({
    idInfraccion: infraccion.id_infraccion,
    prestamo: (0, prestamoMappers_1.fromPrismaPrestamo)(prestamo, ejemplar, usuario, libro, autor),
    tipoInfraccion: (0, tipoInfraccionMappers_1.fromPrismaTipoInfraccion)(tipoInfraccion),
    multa: infraccion.multa,
    estado: infraccion.estado,
    fechaModificacion: infraccion.fecha_modificacion,
});
exports.fromPrismaInfraccion = fromPrismaInfraccion;
const toPrismaInfraccion = (infraccion) => ({
    id_prestamo: infraccion.prestamo.idPrestamo,
    id_tipo_infraccion: infraccion.tipoInfraccion.idTipoInfraccion,
    multa: infraccion.multa,
    estado: infraccion.estado,
    fecha_modificacion: infraccion.fechaModificacion,
});
exports.toPrismaInfraccion = toPrismaInfraccion;
//# sourceMappingURL=infraccionMapper.js.map