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
exports.eliminarComprobante = exports.modificarComprobante = exports.obtenerComprobante = exports.listarComprobantes = exports.insertarComprobante = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const comprobanteMapper_1 = require("../mappers/comprobanteMapper");
const prisma = new client_1.PrismaClient();
const insertarComprobante = (comprobante) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.comprobantes.create({
        data: (0, comprobanteMapper_1.toPrismaComprobante)(comprobante)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarComprobante = insertarComprobante;
const listarComprobantes = () => __awaiter(void 0, void 0, void 0, function* () {
    const comprobantesList = yield prisma.comprobantes.findMany({
        include: {
            usuarios: true,
            prestamos: { include: {
                    usuarios: true,
                    ejemplares: { include: { libros: { include: { autores: true } } } }
                } }
        }
    });
    return comprobantesList.map((comprobante) => (0, comprobanteMapper_1.fromPrismaComprobante)(comprobante, comprobante.usuarios, comprobante.prestamos, comprobante.prestamos.ejemplares, comprobante.prestamos.ejemplares.libros, comprobante.prestamos.ejemplares.libros.autores));
});
exports.listarComprobantes = listarComprobantes;
const obtenerComprobante = (idComprobante) => __awaiter(void 0, void 0, void 0, function* () {
    const comprobante = yield prisma.comprobantes.findUnique({
        where: {
            id_comprobante: idComprobante
        },
        include: {
            usuarios: true,
            prestamos: { include: {
                    usuarios: true,
                    ejemplares: { include: { libros: { include: { autores: true } } } }
                } }
        }
    });
    if (!comprobante) {
        throw new Error(`Comprobante con id ${idComprobante} no encontrado`);
    }
    return (0, comprobanteMapper_1.fromPrismaComprobante)(comprobante, comprobante.usuarios, comprobante.prestamos, comprobante.prestamos.ejemplares, comprobante.prestamos.ejemplares.libros, comprobante.prestamos.ejemplares.libros.autores);
});
exports.obtenerComprobante = obtenerComprobante;
const modificarComprobante = (idComprobante, comprobante) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.comprobantes.update({
        where: {
            id_comprobante: idComprobante
        },
        data: (0, comprobanteMapper_1.toPrismaComprobante)(comprobante)
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarComprobante = modificarComprobante;
const eliminarComprobante = (idComprobante) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.comprobantes.delete({
        where: {
            id_comprobante: idComprobante
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarComprobante = eliminarComprobante;
//# sourceMappingURL=comprobanteService.js.map