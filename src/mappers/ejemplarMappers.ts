import { ejemplares } from "@prisma/client";
import { IEjemplar } from "../models/Ejemplar";

export const fromPrismaEjemplar = (ejemplar: ejemplares): IEjemplar => ({
  idEjemplar: ejemplar.id_ejemplar,
  libro: ejemplar.id_libro,
  conservacion: ejemplar.conservacion,
  disponibilidad: ejemplar.disponibilidad,
  fechaModificacion: ejemplar.fecha_modificacion,
});

export const toPrismaEjemplar = (ejemplar: IEjemplar): any => ({
  id_libro: ejemplar.libro,
  conservacion: ejemplar.conservacion,
  disponibilidad: ejemplar.disponibilidad,
  fecha_modificacion: ejemplar.fechaModificacion,
});
