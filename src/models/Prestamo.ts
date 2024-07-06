import { IEjemplar } from "./Ejemplar";
import { IUsuario } from "./Usuario";

export interface IPrestamo {
    idPrestamo: number;
    Usuario: IUsuario;
    Ejemplar: IEjemplar;
    fechaReserva?: Date;
    fechaPrestamo?: Date;
    fechaEstimadaDevolucion?: Date;
    fechaDevolucion?: Date;
    estado?: string;
    fechaModificacion?: Date;
}
