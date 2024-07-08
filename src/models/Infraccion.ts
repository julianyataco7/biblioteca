import { IPrestamo } from "./Prestamo";
import { ITipoInfraccion } from "./TipoInfraccion";

export interface IInfraccion {
    idInfraccion: number;
    fechaCreacion: Date;
    prestamo: IPrestamo;
    tipoInfraccion: ITipoInfraccion;
    multa?: string;
    estado?: string;
    fechaModificacion?: Date;
  }
  