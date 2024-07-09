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
exports.eliminarTipoInfraccion = exports.modificarTipoInfraccion = exports.obtenerTipoInfraccion = exports.listarTiposInfraccion = exports.insertarTipoInfraccion = void 0;
const tipoInfraccionService = __importStar(require("../services/tipoInfraccionService"));
const ResponseModel_1 = require("../models/ResponseModel");
const tipoInfraccionSchema_1 = require("../schema/tipoInfraccionSchema");
const insertarTipoInfraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionController::insertarTipoInfraccion');
    try {
        const { error } = tipoInfraccionSchema_1.insertarTipoInfraccionSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield tipoInfraccionService.insertarTipoInfraccion(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarTipoInfraccion = insertarTipoInfraccion;
const listarTiposInfraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionController::listarTiposInfraccion');
    try {
        const tiposInfraccion = yield tipoInfraccionService.listarTiposInfraccion();
        res.status(200).json(ResponseModel_1.ResponseModel.success(tiposInfraccion));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarTiposInfraccion = listarTiposInfraccion;
const obtenerTipoInfraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionController::obtenerTipoInfraccion');
    try {
        const { id } = req.params;
        const { error } = tipoInfraccionSchema_1.modificarTipoInfraccionSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const tipoInfraccion = yield tipoInfraccionService.obtenerTipoInfraccion(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(tipoInfraccion));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerTipoInfraccion = obtenerTipoInfraccion;
const modificarTipoInfraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionController::modificarTipoInfraccion');
    try {
        const { id } = req.params;
        const response = yield tipoInfraccionService.modificarTipoInfraccion(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarTipoInfraccion = modificarTipoInfraccion;
const eliminarTipoInfraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoInfraccionController::eliminarTipoInfraccion');
    try {
        const { id } = req.params;
        const response = yield tipoInfraccionService.eliminarTipoInfraccion(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarTipoInfraccion = eliminarTipoInfraccion;
//# sourceMappingURL=tipoInfraccionController.js.map