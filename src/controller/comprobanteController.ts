import { Request, Response } from "express";
import * as comprobanteService from "../services/comprobanteService";
import { ResponseModel } from "../models/ResponseModel";
import { IComprobante } from "../models/Comprobante";
import { modificarComprobanteSchema,insertarComprobanteSchema } from "../schema/comprobanteSchema";


export const insertarComprobante = async (req: Request, res: Response) => {
    console.log('comprobanteController::insertarComprobante');
    try {

        const { error } = insertarComprobanteSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }

        const response = await comprobanteService.insertarComprobante(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarComprobantes = async (req: Request, res: Response) => {
    console.log('comprobanteController::listarComprobantes');
    try {
        const comprobantes = await comprobanteService.listarComprobantes();
        res.status(200).json(ResponseModel.success(comprobantes));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerComprobante = async (req: Request, res: Response) => {
    console.log('comprobanteController::obtenerComprobante');
    try {
        const { id } = req.params;
        const comprobante = await comprobanteService.obtenerComprobante(Number(id));
        res.status(200).json(ResponseModel.success(comprobante));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarComprobante = async (req: Request, res: Response) => {
    console.log('comprobanteController::modificarComprobante');
    try {
        const { id } = req.params;

        const { error } = modificarComprobanteSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }

        const response = await comprobanteService.modificarComprobante(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarComprobante = async (req: Request, res: Response) => {
    console.log('comprobanteController::eliminarComprobante');
    try {
        const { id } = req.params;
        const response = await comprobanteService.eliminarComprobante(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
