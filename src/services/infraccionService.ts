import { PrismaClient, infracciones, prestamos, tipos_infracciones } from "@prisma/client";
import { IInfraccion } from "../models/Infraccion";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaInfraccion, toPrismaInfraccion } from "../mappers/infraccionMapper";

const prisma = new PrismaClient();

export const insertarInfraccion = async (infraccion: IInfraccion) => {
    await prisma.infracciones.create({
        data: toPrismaInfraccion(infraccion)
    });
    return RESPONSE_INSERT_OK;
}

export const listarInfracciones = async () => {
    const infracciones: infracciones[] = await prisma.infracciones.findMany({
        include: {
            prestamos: {include:{
                usuarios:true,
                ejemplares:{include:{libros:{include:{autores:true}}}}
            }},
            tipos_infracciones: true
        },
        where: {
            estado: '1'
        }
       
    });
    return infracciones.map((infraccion:any) => fromPrismaInfraccion(infraccion, infraccion.prestamos, infraccion.prestamos.ejemplares,infraccion.prestamos.usuarios,infraccion.prestamos.ejemplares.libros,infraccion.prestamos.ejemplares.libros.autores,infraccion.tipos_infracciones));
}

export const obtenerInfraccion = async (idInfraccion: number) => {
    const infraccion: any | null = await prisma.infracciones.findUnique({
        where: {
            id_infraccion: idInfraccion,
            estado: '1'
        },
        include: {
            prestamos: {include:{
                usuarios:true,
                ejemplares:{include:{libros:{include:{autores:true}}}}
            }},
            tipos_infracciones: true
        }
    });

    if (!infraccion) {
        throw new Error(`Infracción con id ${idInfraccion} no encontrada`);
    }

    return fromPrismaInfraccion(infraccion, infraccion.prestamos, infraccion.prestamos.ejemplares,infraccion.prestamos.usuarios,infraccion.prestamos.ejemplares.libros,infraccion.prestamos.ejemplares.libros.autores,infraccion.tipos_infracciones);
}

export const modificarInfraccion = async (idInfraccion: number, infraccion: IInfraccion) => {
    await prisma.infracciones.update({
        where: {
            id_infraccion: idInfraccion
        },
        data: toPrismaInfraccion(infraccion)
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarInfraccion = async (idInfraccion: number) => {
    await prisma.infracciones.delete({
        where: {
            id_infraccion: idInfraccion
        }
    });

    return RESPONSE_DELETE_OK;
}
