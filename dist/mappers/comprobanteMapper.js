"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaComprobante = exports.fromPrismaComprobante = void 0;
const prestamoMappers_1 = require("./prestamoMappers");
const usuarioMappers_1 = require("./usuarioMappers");
const fromPrismaComprobante = (comprobante, usuario, prestamo, ejemplar, libro, autor) => ({
    idComprobante: comprobante.id_comprobante,
    usuario: (0, usuarioMappers_1.fromPrismaUsuario)(usuario),
    prestamo: (0, prestamoMappers_1.fromPrismaPrestamo)(prestamo, ejemplar, usuario, libro, autor),
    fechaEmision: comprobante.fecha_emision,
    fechaModificacion: comprobante.fecha_modificacion,
});
exports.fromPrismaComprobante = fromPrismaComprobante;
const toPrismaComprobante = (comprobante) => ({
    id_usuario: comprobante.usuario.idUsuario,
    id_prestamo: comprobante.prestamo.idPrestamo,
    fecha_emision: comprobante.fechaEmision,
    fecha_modificacion: comprobante.fechaModificacion,
});
exports.toPrismaComprobante = toPrismaComprobante;
//# sourceMappingURL=comprobanteMapper.js.map