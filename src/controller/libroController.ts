import { Request, Response } from "express";
import * as libroService from "../services/libroService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarLibro = async (req: Request, res: Response) => {
    console.log('libroController::insertarLibro - Datos recibidos:', req.body);
    try {
        
        const response = await libroService.insertarLibro(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarLibros = async (req: Request, res: Response) => {
    console.log('libroController::listarLibros');
    try {
        const libros = await libroService.listarLibros();
        res.status(200).json(ResponseModel.success(libros));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerLibro = async (req: Request, res: Response) => {
    console.log('libroController::obtenerLibro');
    try {
        const { id } = req.params;
        const libro = await libroService.obtenerLibro(Number(id));
        res.status(200).json(ResponseModel.success(libro));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarLibro = async (req: Request, res: Response) => {
    console.log('libroController::modificarLibro');
    try {
        const { id } = req.params;
        const response = await libroService.modificarLibro(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarLibro = async (req: Request, res: Response) => {
    console.log('libroController::eliminarLibro');
    try {
        const { id } = req.params;
        const response = await libroService.eliminarLibro(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}