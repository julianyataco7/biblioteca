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
exports.eliminarPrestamo = exports.modificarPrestamo = exports.obtenerPrestamo = exports.listarPrestamos = exports.insertarPrestamo = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const prestamoMappers_1 = require("../mappers/prestamoMappers");
const prisma = new client_1.PrismaClient();
const insertarPrestamo = (prestamo) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.prestamos.create({
        data: (0, prestamoMappers_1.toPrismaPrestamo)(prestamo)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarPrestamo = insertarPrestamo;
const listarPrestamos = () => __awaiter(void 0, void 0, void 0, function* () {
    const prestamos = yield prisma.prestamos.findMany({
        include: {
            usuarios: true,
            ejemplares: { include: { libros: { include: { autores: true } } } }
        },
        where: {
            estado: '1'
        }
    });
    return prestamos.map((prestamo) => (0, prestamoMappers_1.fromPrismaPrestamo)(prestamo, prestamo.ejemplares, prestamo.usuarios, prestamo.ejemplares.libros, prestamo.ejemplares.libros.autores));
});
exports.listarPrestamos = listarPrestamos;
const obtenerPrestamo = (idPrestamo) => __awaiter(void 0, void 0, void 0, function* () {
    const prestamo = yield prisma.prestamos.findUnique({
        include: {
            usuarios: true,
            ejemplares: { include: { libros: { include: { autores: true } } } }
        },
        where: {
            id_prestamo: idPrestamo,
            estado: '1'
        }
    });
    if (!prestamo) {
        throw new Error(`Prestamo con id ${idPrestamo} no encontrado`);
    }
    return (0, prestamoMappers_1.fromPrismaPrestamo)(prestamo, prestamo.ejemplares, prestamo.usuarios, prestamo.ejemplares.libros, prestamo.ejemplares.libros.autores);
});
exports.obtenerPrestamo = obtenerPrestamo;
const modificarPrestamo = (idPrestamo, prestamo) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.prestamos.update({
        data: (0, prestamoMappers_1.toPrismaPrestamo)(prestamo),
        where: {
            id_prestamo: idPrestamo
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarPrestamo = modificarPrestamo;
const eliminarPrestamo = (idPrestamo) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.prestamos.update({
        where: {
            id_prestamo: idPrestamo
        },
        data: {
            estado: '0'
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarPrestamo = eliminarPrestamo;
//# sourceMappingURL=prestamoService.js.map