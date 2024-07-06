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
exports.eliminarPrestamo = exports.modificarPrestamo = exports.obtenerPrestamo = exports.listarPrestamos = exports.insertarPrestamo = void 0;
const prestamoService = __importStar(require("../services/prestamoService"));
const ResponseModel_1 = require("../models/ResponseModel");
const insertarPrestamo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('prestamoController::insertarPrestamo');
    try {
        const response = yield prestamoService.insertarPrestamo(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarPrestamo = insertarPrestamo;
const listarPrestamos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('prestamoController::listarPrestamos');
    try {
        const prestamos = yield prestamoService.listarPrestamos();
        res.status(200).json(ResponseModel_1.ResponseModel.success(prestamos));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPrestamos = listarPrestamos;
const obtenerPrestamo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('prestamoController::obtenerPrestamo');
    try {
        const { id } = req.params;
        const prestamo = yield prestamoService.obtenerPrestamo(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(prestamo));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPrestamo = obtenerPrestamo;
const modificarPrestamo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('prestamoController::modificarPrestamo');
    try {
        const { id } = req.params;
        const response = yield prestamoService.modificarPrestamo(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarPrestamo = modificarPrestamo;
const eliminarPrestamo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('prestamoController::eliminarPrestamo');
    try {
        const { id } = req.params;
        const response = yield prestamoService.eliminarPrestamo(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPrestamo = eliminarPrestamo;
//# sourceMappingURL=prestamoController.js.map