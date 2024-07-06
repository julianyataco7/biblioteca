import { Request, Response } from "express";
import * as prestamoService from "../services/prestamoService";
import { ResponseModel } from "../models/ResponseModel";
import { IPrestamo } from "../models/Prestamo";

export const insertarPrestamo = async (req: Request, res: Response) => {
    console.log('prestamoController::insertarPrestamo');
    try {
        const response = await prestamoService.insertarPrestamo(req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarPrestamos = async (req: Request, res: Response) => {
    console.log('prestamoController::listarPrestamos');
    try {
        const prestamos = await prestamoService.listarPrestamos();
        res.status(200).json(ResponseModel.success(prestamos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerPrestamo = async (req: Request, res: Response) => {
    console.log('prestamoController::obtenerPrestamo');
    try {
        const { id } = req.params;
        const prestamo = await prestamoService.obtenerPrestamo(Number(id));
        res.status(200).json(ResponseModel.success(prestamo));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarPrestamo = async (req: Request, res: Response) => {
    console.log('prestamoController::modificarPrestamo');
    try {
        const { id } = req.params;
        const response = await prestamoService.modificarPrestamo(Number(id), req.body);
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarPrestamo = async (req: Request, res: Response) => {
    console.log('prestamoController::eliminarPrestamo');
    try {
        const { id } = req.params;
        const response = await prestamoService.eliminarPrestamo(Number(id));
        res.status(200).json(ResponseModel.success(null, response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}
