import { PrismaClient, autores } from "@prisma/client";
import { IAutor } from "../models/Autor";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaAutor, toPrismaAutor } from "../mappers/autorMappers";

const prisma = new PrismaClient();

export const insertarAutor = async (autor: IAutor) => {
    
    await prisma.autores.create({
        data: toPrismaAutor(autor)
    });
    return RESPONSE_INSERT_OK;
}

export const listarAutores = async () => {
    const autores: autores[] = await prisma.autores.findMany({
        where: {
            estado: '1'
        }
    });
    return autores.map((autor: autores)=> fromPrismaAutor(autor));
}

export const obtenerAutor = async (idAutor: number) => {
    console.log('autoreservice::obtenerAutor',idAutor);

    const autor: autores =  await prisma.autores.findUnique({
        where: {
            id_autor: idAutor,
            estado: '1'
    
        }
    });

    return fromPrismaAutor(autor);
}

export const modificarAutor = async (idAutor: number, autor:IAutor) => {
    console.log('autoreservice::modificarAutor',idAutor,autor);
    await prisma.autores.update({
        data: toPrismaAutor(autor),
        where:{
            id_autor: idAutor
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarAutor = async (idAutor: number) => {
    console.log('autoreservice::eliminarAutor',idAutor);

    await prisma.autores.update({
        data: {
            estado: '0'
        },
        where: {
            id_autor: idAutor
        }
    })

    return RESPONSE_DELETE_OK;
}