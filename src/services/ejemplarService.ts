import { PrismaClient, ejemplares,libros } from "@prisma/client";
import { IEjemplar } from "../models/Ejemplar";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaEjemplar, toPrismaEjemplar } from "../mappers/ejemplarMappers";


const prisma = new PrismaClient();

export const insertarEjemplar = async (ejemplar: IEjemplar) => {
    
    
    await prisma.ejemplares.create({
        data: toPrismaEjemplar(ejemplar)
    });
    return RESPONSE_INSERT_OK;
}

export const listarEjemplares = async () => {
    const ejemplares: ejemplares[] = await prisma.ejemplares.findMany({
        include:{
            libros:{include:{autores:true}}
        
        },
        where: {
            disponibilidad: 1
        }
    });
    return ejemplares.map((ejemplar: any) => fromPrismaEjemplar(ejemplar,ejemplar.libros,ejemplar.libros.autores));
}

export const obtenerEjemplar = async (idEjemplar: number) => {
    const ejemplar: any | null = await prisma.ejemplares.findUnique({
        include:{
            libros:{include:{autores:true}}
        
        },
        where: {
            id_ejemplar: idEjemplar,

        }
    });

    if (!ejemplar) {
        throw new Error(`Ejemplar con id ${idEjemplar} no encontrado`);
    }

    return fromPrismaEjemplar(ejemplar,ejemplar.libros,ejemplar.libros.autores);
}

export const modificarEjemplar = async (idEjemplar: number, ejemplar: IEjemplar) => {
    await prisma.ejemplares.update({
        data: toPrismaEjemplar(ejemplar),
        where: {
            id_ejemplar: idEjemplar
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarEjemplar = async (idEjemplar: number) => {
    await prisma.ejemplares.update({
        where: {
            id_ejemplar: idEjemplar
        },
        data: {
            disponibilidad: 0
        }
    });

    return RESPONSE_DELETE_OK;
}
