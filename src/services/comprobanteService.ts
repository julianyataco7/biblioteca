import { PrismaClient, comprobantes, usuarios, prestamos } from "@prisma/client";
import { IComprobante } from "../models/Comprobante";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaComprobante, toPrismaComprobante } from "../mappers/comprobanteMapper";

const prisma = new PrismaClient();

export const insertarComprobante = async (comprobante: IComprobante) => {
    await prisma.comprobantes.create({
        data: toPrismaComprobante(comprobante)
    });
    return RESPONSE_INSERT_OK;
}

export const listarComprobantes = async () => {
    const comprobantesList: comprobantes[] = await prisma.comprobantes.findMany({
        include: {
            usuarios: true,
            prestamos: {include:{
                usuarios:true,
                ejemplares:{include:{libros:{include:{autores:true}}}}
            }}
        } 
    });
    return comprobantesList.map((comprobante: any) => fromPrismaComprobante(comprobante,comprobante.usuarios,comprobante.prestamos,comprobante.prestamos.ejemplares,comprobante.prestamos.ejemplares.libros,comprobante.prestamos.ejemplares.libros.autores));
}

export const obtenerComprobante = async (idComprobante: number) => {
    const comprobante: any | null = await prisma.comprobantes.findUnique({
        where: {
            id_comprobante: idComprobante
        },
        include: {
            usuarios: true,
            prestamos: {include:{
                usuarios:true,
                ejemplares:{include:{libros:{include:{autores:true}}}}
            }}
        }
    });

    if (!comprobante) {
        throw new Error(`Comprobante con id ${idComprobante} no encontrado`);
    }

    return fromPrismaComprobante(comprobante,comprobante.usuarios,comprobante.prestamos,comprobante.prestamos.ejemplares,comprobante.prestamos.ejemplares.libros,comprobante.prestamos.ejemplares.libros.autores);
}

export const modificarComprobante = async (idComprobante: number, comprobante: IComprobante) => {
    await prisma.comprobantes.update({
        where: {
            id_comprobante: idComprobante
        },
        data: toPrismaComprobante(comprobante)
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarComprobante = async (idComprobante: number) => {
    await prisma.comprobantes.delete({
        where: {
            id_comprobante: idComprobante
        }
    });

    return RESPONSE_DELETE_OK;
}
