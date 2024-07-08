import { tipos_infracciones,Prisma } from "@prisma/client";
import { ITipoInfraccion } from "../models/TipoInfraccion";
import { Decimal } from "@prisma/client/runtime/library";

export const fromPrismaTipoInfraccion = (tipoInfraccion: tipos_infracciones): any => ({
  idTipoInfraccion: tipoInfraccion.id_tipo_Infraccion,
  descripcion: tipoInfraccion.descripcion,
  penalizacionMonto: tipoInfraccion.penalizacion_monto?.toNumber(),
  fechaModificacion: tipoInfraccion.fecha_modificacion,
});

export const toPrismaTipoInfraccion = (tipoInfraccion: ITipoInfraccion): any => ({
  id_tipo_Infraccion: tipoInfraccion.idTipoInfraccion,
  descripcion: tipoInfraccion.descripcion,
  penalizacion_monto: tipoInfraccion.penalizacionMonto ? new Prisma.Decimal(tipoInfraccion.penalizacionMonto) : undefined,
  fecha_modificacion: tipoInfraccion.fechaModificacion,
});
