import { Request, Response } from "express";
import * as tipoInfraccionService from "../services/tipoInfraccionService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarTipoInfraccion = async (req: Request, res: Response) => {
    console.log('tipoInfraccionController::insertarTipoInfraccion');
    try {
        const response = await tipoInfraccionService.insertarTipoInfraccion(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarTiposInfraccion = async (req: Request, res: Response) => {
    console.log('tipoInfraccionController::listarTiposInfraccion');
    try {
        const tiposInfraccion = await tipoInfraccionService.listarTiposInfraccion();
        res.status(200).json(ResponseModel.success(tiposInfraccion));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerTipoInfraccion = async (req: Request, res: Response) => {
    console.log('tipoInfraccionController::obtenerTipoInfraccion');
    try {
        const { id } = req.params;
        const tipoInfraccion = await tipoInfraccionService.obtenerTipoInfraccion(Number(id));
        res.status(200).json(ResponseModel.success(tipoInfraccion));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarTipoInfraccion = async (req: Request, res: Response) => {
    console.log('tipoInfraccionController::modificarTipoInfraccion');
    try {
        const { id } = req.params;
        const response = await tipoInfraccionService.modificarTipoInfraccion(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarTipoInfraccion = async (req: Request, res: Response) => {
    console.log('tipoInfraccionController::eliminarTipoInfraccion');
    try {
        const { id } = req.params;
        const response = await tipoInfraccionService.eliminarTipoInfraccion(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
