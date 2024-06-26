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
exports.eliminarLibro = exports.modificarLibro = exports.obtenerLibro = exports.listarLibros = exports.insertarLibro = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const libroMappers_1 = require("../mappers/libroMappers");
const prisma = new client_1.PrismaClient();
const insertarLibro = (libro) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Datos a insertar:', libro);
    const datosPrisma = (0, libroMappers_1.toPrismaLibro)(libro);
    yield prisma.libros.create({ data: datosPrisma });
    return 'RESPONSE_INSERT_OK';
});
exports.insertarLibro = insertarLibro;
const listarLibros = () => __awaiter(void 0, void 0, void 0, function* () {
    const libros = yield prisma.libros.findMany({
        include: {
            autores: true
        },
        where: {
            estado: '1'
        }
    });
    return libros.map((libro) => (0, libroMappers_1.fromPrismaLibro)(libro, libro.autores));
});
exports.listarLibros = listarLibros;
const obtenerLibro = (idLibro) => __awaiter(void 0, void 0, void 0, function* () {
    const libro = yield prisma.libros.findUnique({
        include: {
            autores: true
        },
        where: {
            id_libro: idLibro,
            estado: '1'
        }
    });
    if (!libro) {
        throw new Error(`Libro con id ${idLibro} no encontrado`);
    }
    return (0, libroMappers_1.fromPrismaLibro)(libro, libro.autores);
});
exports.obtenerLibro = obtenerLibro;
const modificarLibro = (idLibro, libro) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.libros.update({
        data: (0, libroMappers_1.toPrismaLibro)(libro),
        where: {
            id_libro: idLibro
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarLibro = modificarLibro;
const eliminarLibro = (idLibro) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.libros.update({
        where: {
            id_libro: idLibro
        },
        data: {
            estado: '0'
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarLibro = eliminarLibro;
//rrr
//# sourceMappingURL=libroService.js.map