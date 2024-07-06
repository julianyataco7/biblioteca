import { PrismaClient, prestamos } from "@prisma/client";
import { IPrestamo } from "../models/Prestamo";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaPrestamo, toPrismaPrestamo } from "../mappers/prestamoMappers";

const prisma = new PrismaClient();

export const insertarPrestamo = async (prestamo: IPrestamo) => {
    await prisma.prestamos.create({
        data: toPrismaPrestamo(prestamo)
    });
    return RESPONSE_INSERT_OK;
}

export const listarPrestamos = async () => {
    const prestamos: prestamos[] = await prisma.prestamos.findMany({
        include:{
            usuarios:true,
            ejemplares:{include:{libros:{include:{autores:true}}}}
        },
        where: {
            estado: '1'
        }
    });
    return prestamos.map((prestamo: any) => fromPrismaPrestamo(prestamo,prestamo.ejemplares,prestamo.usuarios,prestamo.ejemplares.libros,prestamo.ejemplares.libros.autores));
}

export const obtenerPrestamo = async (idPrestamo: number) => {
    const prestamo: any | null = await prisma.prestamos.findUnique({
        include:{
            usuarios:true,
            ejemplares:{include:{libros:{include:{autores:true}}}}
        },
        where: {
            id_prestamo:idPrestamo,
            estado: '1'
        }
    });

    if (!prestamo) {
        throw new Error(`Prestamo con id ${idPrestamo} no encontrado`);
    }

    return fromPrismaPrestamo(prestamo,prestamo.ejemplares,prestamo.usuarios,prestamo.ejemplares.libros,prestamo.ejemplares.libros.autores);
}

export const modificarPrestamo = async (idPrestamo: number, prestamo: IPrestamo) => {
    await prisma.prestamos.update({
        data: toPrismaPrestamo(prestamo),
        where: {
            id_prestamo: idPrestamo
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const eliminarPrestamo = async (idPrestamo: number) => {
    await prisma.prestamos.update({
        where: {
            id_prestamo: idPrestamo
        },
        data: {
            estado: '0' 
        }
    });

    return RESPONSE_DELETE_OK;
}
