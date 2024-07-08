import { infracciones, prestamos, ejemplares,usuarios,libros,autores,tipos_infracciones } from "@prisma/client";
import { IInfraccion } from "../models/Infraccion";
import { fromPrismaPrestamo } from "./prestamoMappers";
import { fromPrismaTipoInfraccion } from "./tipoInfraccionMappers";

export const fromPrismaInfraccion = (infraccion:infracciones,prestamo: prestamos,ejemplar: ejemplares,usuario: usuarios,libro: libros,autor: autores,tipoInfraccion:tipos_infracciones): any => ({
  idInfraccion: infraccion.id_infraccion,
  prestamo: fromPrismaPrestamo(prestamo,ejemplar,usuario,libro,autor,),
  tipoInfraccion: fromPrismaTipoInfraccion(tipoInfraccion),
  multa: infraccion.multa,
  estado: infraccion.estado,
  fechaModificacion: infraccion.fecha_modificacion,
});

export const toPrismaInfraccion = (infraccion: IInfraccion): any => ({
  id_prestamo: infraccion.prestamo.idPrestamo,
  id_tipo_infraccion: infraccion.tipoInfraccion.idTipoInfraccion,
  multa: infraccion.multa,
  estado: infraccion.estado,
  fecha_modificacion: infraccion.fechaModificacion,
});
