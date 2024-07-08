import { PrismaClient, tipos_infracciones } from "@prisma/client";
import { ITipoInfraccion } from "../models/TipoInfraccion";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaTipoInfraccion, toPrismaTipoInfraccion } from "../mappers/tipoInfraccionMappers";

const prisma = new PrismaClient();

export const insertarTipoInfraccion = async (tipoInfraccion: ITipoInfraccion) => {
    await prisma.tipos_infracciones.create({
        data: toPrismaTipoInfraccion(tipoInfraccion)
    });
    return RESPONSE_INSERT_OK;
}

export const listarTiposInfraccion = async () => {
    const tiposInfraccion: tipos_infracciones[] = await prisma.tipos_infracciones.findMany();
    return tiposInfraccion.map((tipoInfraccion: tipos_infracciones) => fromPrismaTipoInfraccion(tipoInfraccion));
}

export const obtenerTipoInfraccion = async (idTipoInfraccion: number) => {
    console.log('tipoInfraccionService::obtenerTipoInfraccion', idTipoInfraccion);

    const tipoInfraccion: tipos_infracciones | null = await prisma.tipos_infracciones.findUnique({
        where: {
            id_tipo_Infraccion: idTipoInfraccion
        }
    });

    return tipoInfraccion ? fromPrismaTipoInfraccion(tipoInfraccion) : null;
}

export const modificarTipoInfraccion = async (idTipoInfraccion: number, tipoInfraccion: ITipoInfraccion) => {
    console.log('tipoInfraccionService::modificarTipoInfraccion', idTipoInfraccion, tipoInfraccion);
    await prisma.tipos_infracciones.update({
        data: toPrismaTipoInfraccion(tipoInfraccion),
        where: {
            id_tipo_Infraccion: idTipoInfraccion
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarTipoInfraccion = async (idTipoInfraccion: number) => {
    console.log('tipoInfraccionService::eliminarTipoInfraccion', idTipoInfraccion);

    await prisma.tipos_infracciones.delete({
        where: {
            id_tipo_Infraccion: idTipoInfraccion
        }
    });

    return RESPONSE_DELETE_OK;
}
