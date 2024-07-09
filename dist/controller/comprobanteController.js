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
exports.eliminarComprobante = exports.modificarComprobante = exports.obtenerComprobante = exports.listarComprobantes = exports.insertarComprobante = void 0;
const comprobanteService = __importStar(require("../services/comprobanteService"));
const ResponseModel_1 = require("../models/ResponseModel");
const comprobanteSchema_1 = require("../schema/comprobanteSchema");
const insertarComprobante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('comprobanteController::insertarComprobante');
    try {
        const { error } = comprobanteSchema_1.insertarComprobanteSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield comprobanteService.insertarComprobante(req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarComprobante = insertarComprobante;
const listarComprobantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('comprobanteController::listarComprobantes');
    try {
        const comprobantes = yield comprobanteService.listarComprobantes();
        res.status(200).json(ResponseModel_1.ResponseModel.success(comprobantes));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarComprobantes = listarComprobantes;
const obtenerComprobante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('comprobanteController::obtenerComprobante');
    try {
        const { id } = req.params;
        const comprobante = yield comprobanteService.obtenerComprobante(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(comprobante));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerComprobante = obtenerComprobante;
const modificarComprobante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('comprobanteController::modificarComprobante');
    try {
        const { id } = req.params;
        const { error } = comprobanteSchema_1.modificarComprobanteSchema.validate(req.body);
        if (error) {
            console.error(error.message);
            res.status(400).json(ResponseModel_1.ResponseModel.error(error.message, 400));
            return;
        }
        const response = yield comprobanteService.modificarComprobante(Number(id), req.body);
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarComprobante = modificarComprobante;
const eliminarComprobante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('comprobanteController::eliminarComprobante');
    try {
        const { id } = req.params;
        const response = yield comprobanteService.eliminarComprobante(Number(id));
        res.status(200).json(ResponseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarComprobante = eliminarComprobante;
//# sourceMappingURL=comprobanteController.js.map