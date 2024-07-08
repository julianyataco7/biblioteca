"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTipoInfraccion = exports.modificarTipoInfraccion = exports.obtenerTipoInfraccion = exports.listarTiposInfraccion = exports.insertarTipoInfraccion = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const tipoInfraccionMappers_1 = require("../mappers/tipoInfraccionMappers");
const prisma = new client_1.PrismaClient();
const insertarTipoInfraccion = (tipoInfraccion) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.tipos_infracciones.create({
        data: (0, tipoInfraccionMappers_1.toPrismaTipoInfraccion)(tipoInfraccion)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarTipoInfraccion = insertarTipoInfraccion;
const listarTiposInfraccion = () => __awaiter(void 0, void 0, void 0, function* () {
    const tiposInfraccion = yield prisma.tipos_infracciones.findMany();
    return tiposInfraccion.map((tipoInfraccion) => (0, tipoInfraccionMappers_1.fromPrismaTipoInfraccion)(tipoInfraccion));
});
exports.listarTiposInfraccion = listarTiposInfraccion;
const obtenerTipoInfraccion = (idTipoInfraccion) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionService::obtenerTipoInfraccion', idTipoInfraccion);
    const tipoInfraccion = yield prisma.tipos_infracciones.findUnique({
        where: {
            id_tipo_Infraccion: idTipoInfraccion
        }
    });
    return tipoInfraccion ? (0, tipoInfraccionMappers_1.fromPrismaTipoInfraccion)(tipoInfraccion) : null;
});
exports.obtenerTipoInfraccion = obtenerTipoInfraccion;
const modificarTipoInfraccion = (idTipoInfraccion, tipoInfraccion) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionService::modificarTipoInfraccion', idTipoInfraccion, tipoInfraccion);
    yield prisma.tipos_infracciones.update({
        data: (0, tipoInfraccionMappers_1.toPrismaTipoInfraccion)(tipoInfraccion),
        where: {
            id_tipo_Infraccion: idTipoInfraccion
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarTipoInfraccion = modificarTipoInfraccion;
const eliminarTipoInfraccion = (idTipoInfraccion) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionService::eliminarTipoInfraccion', idTipoInfraccion);
    yield prisma.tipos_infracciones.delete({
        where: {
            id_tipo_Infraccion: idTipoInfraccion
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarTipoInfraccion = eliminarTipoInfraccion;
//# sourceMappingURL=tipoInfraccionService.js.map