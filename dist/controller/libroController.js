"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const libroService = __importStar(require("../services/libroService"));
const ResponseModel_1 = require("../models/ResponseModel");
const libroSchema_1 = require("../schema/libroSchema");
const insertarLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('libroController::insertarLibro - Datos recibidos:', req.body);
    try {
        const { error } = libroSchema_1.insertarLibroSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield libroService.insertarLibro(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarLibro = insertarLibro;
const listarLibros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('libroController::listarLibros');
    try {
        const libros = yield libroService.listarLibros();
        res.status(200).json(ResponseModel_1.ResponseModel.success(libros));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarLibros = listarLibros;
const obtenerLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('libroController::obtenerLibro');
    try {
        const { id } = req.params;
        const libro = yield libroService.obtenerLibro(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(libro));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerLibro = obtenerLibro;
const modificarLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('libroController::modificarLibro');
    try {
        const { id } = req.params;
        const { error } = libroSchema_1.modificarLibroSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield libroService.modificarLibro(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarLibro = modificarLibro;
const eliminarLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('libroController::eliminarLibro');
    try {
        const { id } = req.params;
        const response = yield libroService.eliminarLibro(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarLibro = eliminarLibro;
//# sourceMappingURL=libroController.js.map