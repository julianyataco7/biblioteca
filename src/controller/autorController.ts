import { Request, Response } from "express"
import * as autorService from "../services/autorService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarAutor = async (req: Request, res: Response) => {
    console.log('autorController::insertarAutor');
    try {
        
        const response = await autorService.insertarAutor(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarAutores = async (req: Request, res: Response) => {
    console.log('autorController::listarAutores');
    try {
        const autores = await autorService.listarAutores();
        res.status(200).json(ResponseModel.success(autores));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerAutor = async (req: Request, res: Response) => {
    console.log('autorController::obtenerAutor');
    try {
        const { id } = req.params;
        const autor = await autorService.obtenerAutor(Number(id))
        res.status(200).json(ResponseModel.success(autor));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarAutor = async (req: Request, res: Response) => {
    console.log('autorController::modificarAutor');
    try {
        const { id } = req.params;
        const response = await autorService.modificarAutor(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarAutor = async (req: Request, res: Response) => {
    console.log('autorController::eliminarAutor');
    try {
        const { id } = req.params;
        const response = await autorService.eliminarAutor(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}