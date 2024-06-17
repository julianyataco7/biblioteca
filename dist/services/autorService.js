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
exports.eliminarAutor = exports.modificarAutor = exports.obtenerAutor = exports.listarAutores = exports.insertarAutor = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const autorMappers_1 = require("../mappers/autorMappers");
const prisma = new client_1.PrismaClient();
const insertarAutor = (autor) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.autores.create({
        data: (0, autorMappers_1.toPrismaAutor)(autor)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarAutor = insertarAutor;
const listarAutores = () => __awaiter(void 0, void 0, void 0, function* () {
    const autores = yield prisma.autores.findMany({
        where: {
            estado: '1'
        }
    });
    return autores.map((autor) => (0, autorMappers_1.fromPrismaAutor)(autor));
});
exports.listarAutores = listarAutores;
const obtenerAutor = (idAutor) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('autoreservice::obtenerAutor', idAutor);
    const autor = yield prisma.autores.findUnique({
        where: {
            id_autor: idAutor,
            estado: '1'
        }
    });
    return (0, autorMappers_1.fromPrismaAutor)(autor);
});
exports.obtenerAutor = obtenerAutor;
const modificarAutor = (idAutor, autor) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('autoreservice::modificarAutor', idAutor, autor);
    yield prisma.autores.update({
        data: (0, autorMappers_1.toPrismaAutor)(autor),
        where: {
            id_autor: idAutor
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarAutor = modificarAutor;
const eliminarAutor = (idAutor) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('autoreservice::eliminarAutor', idAutor);
    yield prisma.autores.update({
        data: {
            estado: '0'
        },
        where: {
            id_autor: idAutor
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarAutor = eliminarAutor;
//# sourceMappingURL=autorService.js.map