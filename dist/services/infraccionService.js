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
exports.eliminarInfraccion = exports.modificarInfraccion = exports.obtenerInfraccion = exports.listarInfracciones = exports.insertarInfraccion = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const infraccionMapper_1 = require("../mappers/infraccionMapper");
const prisma = new client_1.PrismaClient();
const insertarInfraccion = (infraccion) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.infracciones.create({
        data: (0, infraccionMapper_1.toPrismaInfraccion)(infraccion)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarInfraccion = insertarInfraccion;
const listarInfracciones = () => __awaiter(void 0, void 0, void 0, function* () {
    const infracciones = yield prisma.infracciones.findMany({
        include: {
            prestamos: { include: {
                    usuarios: true,
                    ejemplares: { include: { libros: { include: { autores: true } } } }
                } },
            tipos_infracciones: true
        },
        where: {
            estado: '1'
        }
    });
    return infracciones.map((infraccion) => (0, infraccionMapper_1.fromPrismaInfraccion)(infraccion, infraccion.prestamos, infraccion.prestamos.ejemplares, infraccion.prestamos.usuarios, infraccion.prestamos.ejemplares.libros, infraccion.prestamos.ejemplares.libros.autores, infraccion.tipos_infracciones));
});
exports.listarInfracciones = listarInfracciones;
const obtenerInfraccion = (idInfraccion) => __awaiter(void 0, void 0, void 0, function* () {
    const infraccion = yield prisma.infracciones.findUnique({
        where: {
            id_infraccion: idInfraccion,
            estado: '1'
        },
        include: {
            prestamos: { include: {
                    usuarios: true,
                    ejemplares: { include: { libros: { include: { autores: true } } } }
                } },
            tipos_infracciones: true
        }
    });
    if (!infraccion) {
        throw new Error(`Infracción con id ${idInfraccion} no encontrada`);
    }
    return (0, infraccionMapper_1.fromPrismaInfraccion)(infraccion, infraccion.prestamos, infraccion.prestamos.ejemplares, infraccion.prestamos.usuarios, infraccion.prestamos.ejemplares.libros, infraccion.prestamos.ejemplares.libros.autores, infraccion.tipos_infracciones);
});
exports.obtenerInfraccion = obtenerInfraccion;
const modificarInfraccion = (idInfraccion, infraccion) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.infracciones.update({
        where: {
            id_infraccion: idInfraccion
        },
        data: (0, infraccionMapper_1.toPrismaInfraccion)(infraccion)
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarInfraccion = modificarInfraccion;
const eliminarInfraccion = (idInfraccion) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.infracciones.delete({
        where: {
            id_infraccion: idInfraccion
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarInfraccion = eliminarInfraccion;
//# sourceMappingURL=infraccionService.js.map