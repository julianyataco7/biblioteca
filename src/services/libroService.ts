import { PrismaClient, libros } from "@prisma/client";
import { ILibro } from "../models/Libro";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaLibro, toPrismaLibro } from "../mappers/libroMappers";

const prisma = new PrismaClient();

export const insertarLibro = async (libro: ILibro) => {
    await prisma.libros.create({
        data: toPrismaLibro(libro)
    });
    return RESPONSE_INSERT_OK;
}

export const listarLibros = async () => {
    const libros: libros[] = await prisma.libros.findMany({
        where: {
            estado: '1'
        }
    });
    return libros.map((libro: libros) => fromPrismaLibro(libro));
}

export const obtenerLibro = async (idLibro: number) => {
    const libro: libros | null = await prisma.libros.findUnique({
        where: {
            id_libro: idLibro
        }
    });

    if (!libro) {
        throw new Error(`Libro con id ${idLibro} no encontrado`);
    }

    return fromPrismaLibro(libro);
}

export const modificarLibro = async (idLibro: number, libro: ILibro) => {
    await prisma.libros.update({
        data: toPrismaLibro(libro),
        where: {
            id_libro: idLibro
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarLibro = async (idLibro: number) => {
    await prisma.libros.update({
        where: {
            id_libro: idLibro
        },
        data: {
            estado: '0'
        }
    });


    return RESPONSE_DELETE_OK;
}
//rrr