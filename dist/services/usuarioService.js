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
exports.eliminarUsuario = exports.modificarUsuario = exports.obtenerUsuario = exports.listarUsuarios = exports.insertarUsuario = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const usuarioMappers_1 = require("../mappers/usuarioMappers");
const prisma = new client_1.PrismaClient();
const insertarUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.usuarios.create({
        data: (0, usuarioMappers_1.toPrismaUsuario)(usuario)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarUsuario = insertarUsuario;
const listarUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield prisma.usuarios.findMany({
        where: {
            estado: '1'
        }
    });
    return usuarios.map((usuario) => (0, usuarioMappers_1.fromPrismaUsuario)(usuario));
});
exports.listarUsuarios = listarUsuarios;
const obtenerUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioservice::obtenerUsuario', idUsuario);
    const usuario = yield prisma.usuarios.findUnique({
        where: {
            id_usuario: idUsuario,
            estado: '1'
        }
    });
    return (0, usuarioMappers_1.fromPrismaUsuario)(usuario);
});
exports.obtenerUsuario = obtenerUsuario;
const modificarUsuario = (idUsuario, usuario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioservice::modificarUsuario', idUsuario, usuario);
    yield prisma.usuarios.update({
        data: (0, usuarioMappers_1.toPrismaUsuario)(usuario),
        where: {
            id_usuario: idUsuario
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarUsuario = modificarUsuario;
const eliminarUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuarioservice::eliminarUsuario', idUsuario);
    yield prisma.usuarios.update({
        data: {
            estado: '0'
        },
        where: {
            id_usuario: idUsuario
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuarioService.js.map