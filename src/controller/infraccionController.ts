import { Request, Response } from "express";
import * as infraccionService from "../services/infraccionService";
import { ResponseModel } from "../models/ResponseModel";
import { IInfraccion } from "../models/Infraccion";

export const insertarInfraccion = async (req: Request, res: Response) => {
    console.log('infraccionController::insertarInfraccion');
    try {
        const infraccion: IInfraccion = req.body;
        const response = await infraccionService.insertarInfraccion(infraccion);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarInfracciones = async (req: Request, res: Response) => {
    console.log('infraccionController::listarInfracciones');
    try {
        const infracciones = await infraccionService.listarInfracciones();
        res.status(200).json(ResponseModel.success(infracciones));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerInfraccion = async (req: Request, res: Response) => {
    console.log('infraccionController::obtenerInfraccion');
    try {
        const { id } = req.params;
        const infraccion = await infraccionService.obtenerInfraccion(Number(id));
        res.status(200).json(ResponseModel.success(infraccion));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarInfraccion = async (req: Request, res: Response) => {
    console.log('infraccionController::modificarInfraccion');
    try {
        const { id } = req.params;
        const infraccion: IInfraccion = req.body;
        const response = await infraccionService.modificarInfraccion(Number(id), infraccion);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarInfraccion = async (req: Request, res: Response) => {
    console.log('infraccionController::eliminarInfraccion');
    try {
        const { id } = req.params;
        const response = await infraccionService.eliminarInfraccion(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
