import { IPrestamo } from "./Prestamo";
import { ITipoInfraccion } from "./TipoInfraccion";

export interface IInfraccion {
    idInfraccion: number;
    prestamo: IPrestamo;
    tipoInfraccion: ITipoInfraccion;
    multa?: string;
    estado?: string;
    fechaModificacion?: Date;
  }
  