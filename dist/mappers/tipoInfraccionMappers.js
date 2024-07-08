"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaTipoInfraccion = exports.fromPrismaTipoInfraccion = void 0;
const client_1 = require("@prisma/client");
const fromPrismaTipoInfraccion = (tipoInfraccion) => {
    var _a;
    return ({
        idTipoInfraccion: tipoInfraccion.id_tipo_Infraccion,
        descripcion: tipoInfraccion.descripcion,
        penalizacionMonto: (_a = tipoInfraccion.penalizacion_monto) === null || _a === void 0 ? void 0 : _a.toNumber(),
        fechaCreacion: tipoInfraccion.fecha_creacion,
        fechaModificacion: tipoInfraccion.fecha_modificacion,
    });
};
exports.fromPrismaTipoInfraccion = fromPrismaTipoInfraccion;
const toPrismaTipoInfraccion = (tipoInfraccion) => ({
    id_tipo_Infraccion: tipoInfraccion.idTipoInfraccion,
    descripcion: tipoInfraccion.descripcion,
    penalizacion_monto: tipoInfraccion.penalizacionMonto ? new client_1.Prisma.Decimal(tipoInfraccion.penalizacionMonto) : undefined,
    fecha_creacion: tipoInfraccion.fechaCreacion,
    fecha_modificacion: tipoInfraccion.fechaModificacion,
});
exports.toPrismaTipoInfraccion = toPrismaTipoInfraccion;
//# sourceMappingURL=tipoInfraccionMappers.js.map