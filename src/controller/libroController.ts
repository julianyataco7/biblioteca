import { Request, Response } from "express";
import * as libroService from "../services/libroService";
import { ResponseModel } from "../models/ResponseModel";
import { ILibro } from "../models/Libro";

export const insertarLibro = async (req: Request, res: Response) => {
    console.log('libroController::insertarLibro');
    try {
        const libroData: ILibro = req.body;
        const response = await libroService.insertarLibro(libroData);
        res.status(200).json(ResponseModel.success(null, response));
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
        const libroData: ILibro = req.body;
        const response = await libroService.modificarLibro(Number(id), libroData);
        res.status(200).json(ResponseModel.success(null, response));
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
