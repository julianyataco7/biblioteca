import { prestamos,ejemplares,usuarios,libros,autores } from "@prisma/client";
import {IPrestamo} from "../models/Prestamo";
import { fromPrismaEjemplar } from "./ejemplarMappers";
import { fromPrismaUsuario } from "./usuarioMappers";


export const fromPrismaPrestamo = (prestamo: prestamos,ejemplares: ejemplares,usuarios: usuarios,libros: libros,autores: autores): any => ({
    idPrestamo: prestamo.id_prestamo,
    Usuario: fromPrismaUsuario(usuarios),
    Ejemplar: fromPrismaEjemplar(ejemplares,libros,autores),
    fechaReserva: prestamo.fecha_reserva,
    fechaPrestamo: prestamo.fecha_prestamo,
    fechaEstimada_devolucion: prestamo.fecha_estimada_devolucion,
    fechaDevolucion: prestamo.fecha_devolucion,
    estado: prestamo.estado,
    fechaModificacion: prestamo.fecha_modificacion
});

export const toPrismaPrestamo = (prestamo: IPrestamo): any => ({
    id_usuario: prestamo.Usuario.idUsuario,
    id_ejemplar: prestamo.Ejemplar.idEjemplar,
    fecha_reserva: prestamo.fechaReserva,
    fecha_prestamo: prestamo.fechaPrestamo,
    fecha_estimada_devolucion: prestamo.fechaEstimadaDevolucion,
    fecha_devolucion: prestamo.fechaDevolucion,
    estado: prestamo.estado,
    fecha_modificacion: prestamo.fechaModificacion
});
