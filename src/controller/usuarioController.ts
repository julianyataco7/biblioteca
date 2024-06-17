import { Request, Response } from "express"
import * as usuarioService from "../services/usuarioService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::insertarUsuario');
    try {
        
        const response = await usuarioService.insertarUsuario(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarUsuarios = async (req: Request, res: Response) => {
    console.log('usuarioController::listarUsuarios');
    try {
        const usuarios = await usuarioService.listarUsuarios();
        res.status(200).json(ResponseModel.success(usuarios));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::obtenerUsuario');
    try {
        const { id } = req.params;
        const usuario = await usuarioService.obtenerUsuario(Number(id))
        res.status(200).json(ResponseModel.success(usuario));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::modificarUsuario');
    try {
        const { id } = req.params;
        const response = await usuarioService.modificarUsuario(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarUsuario = async (req: Request, res: Response) => {
    console.log('usuarioController::eliminarUsuario');
    try {
        const { id } = req.params;
        const response = await usuarioService.eliminarUsuario(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}