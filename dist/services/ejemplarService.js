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
exports.eliminarEjemplar = exports.modificarEjemplar = exports.obtenerEjemplar = exports.listarEjemplares = exports.insertarEjemplar = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const ejemplarMappers_1 = require("../mappers/ejemplarMappers");
const prisma = new client_1.PrismaClient();
const insertarEjemplar = (ejemplar) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.ejemplares.create({
        data: (0, ejemplarMappers_1.toPrismaEjemplar)(ejemplar)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarEjemplar = insertarEjemplar;
const listarEjemplares = () => __awaiter(void 0, void 0, void 0, function* () {
    const ejemplares = yield prisma.ejemplares.findMany({
        where: {
            disponibilidad: 1
        }
    });
    return ejemplares.map((ejemplar) => (0, ejemplarMappers_1.fromPrismaEjemplar)(ejemplar));
});
exports.listarEjemplares = listarEjemplares;
const obtenerEjemplar = (idEjemplar) => __awaiter(void 0, void 0, void 0, function* () {
    const ejemplar = yield prisma.ejemplares.findUnique({
        where: {
            id_ejemplar: idEjemplar,
        }
    });
    if (!ejemplar) {
        throw new Error(`Ejemplar con id ${idEjemplar} no encontrado`);
    }
    return (0, ejemplarMappers_1.fromPrismaEjemplar)(ejemplar);
});
exports.obtenerEjemplar = obtenerEjemplar;
const modificarEjemplar = (idEjemplar, ejemplar) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.ejemplares.update({
        data: (0, ejemplarMappers_1.toPrismaEjemplar)(ejemplar),
        where: {
            id_ejemplar: idEjemplar
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarEjemplar = modificarEjemplar;
const eliminarEjemplar = (idEjemplar) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.ejemplares.update({
        where: {
            id_ejemplar: idEjemplar
        },
        data: {
            disponibilidad: 0
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarEjemplar = eliminarEjemplar;
//# sourceMappingURL=ejemplarService.js.map