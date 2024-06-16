import { Request, Response } from "express";
import * as ejemplarService from "../services/ejemplarService";
import { ResponseModel } from "../models/ResponseModel";
import { IEjemplar } from "../models/Ejemplar";

export const insertarEjemplar = async (req: Request, res: Response) => {
    console.log('ejemplarController::insertarEjemplar');
    try {
        const response = await ejemplarService.insertarEjemplar(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarEjemplares = async (req: Request, res: Response) => {
    console.log('ejemplarController::listarEjemplares');
    try {
        const ejemplares = await ejemplarService.listarEjemplares();
        res.status(200).json(ResponseModel.success(ejemplares));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerEjemplar = async (req: Request, res: Response) => {
    console.log('ejemplarController::obtenerEjemplar');
    try {
        const { id } = req.params;
        const ejemplar = await ejemplarService.obtenerEjemplar(Number(id));
        res.status(200).json(ResponseModel.success(ejemplar));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarEjemplar = async (req: Request, res: Response) => {
    console.log('ejemplarController::modificarEjemplar');
    try {
        const { id } = req.params;
        const response = await ejemplarService.modificarEjemplar(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarEjemplar = async (req: Request, res: Response) => {
    console.log('ejemplarController::eliminarEjemplar');
    try {
        const { id } = req.params;
        const response = await ejemplarService.eliminarEjemplar(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
