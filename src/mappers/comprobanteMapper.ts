import { comprobantes, usuarios, prestamos,ejemplares,libros,autores } from "@prisma/client";
import { IComprobante } from "../models/Comprobante";
import { fromPrismaPrestamo } from "./prestamoMappers";
import { fromPrismaUsuario } from "./usuarioMappers";

export const fromPrismaComprobante = (comprobante: comprobantes, usuario: usuarios, prestamo: prestamos,ejemplar: ejemplares,libro: libros,autor: autores): any=> ({
    idComprobante: comprobante.id_comprobante,
    usuario: fromPrismaUsuario(usuario),
    prestamo: fromPrismaPrestamo(prestamo,ejemplar,usuario,libro,autor),
    fechaEmision: comprobante.fecha_emision,
    fechaModificacion: comprobante.fecha_modificacion,
});

export const toPrismaComprobante = (comprobante: IComprobante): any => ({
    id_usuario: comprobante.usuario.idUsuario,
    id_prestamo: comprobante.prestamo.idPrestamo,
    fecha_emision: comprobante.fechaEmision,
    fecha_modificacion: comprobante.fechaModificacion,
});
