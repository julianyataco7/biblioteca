import { IPrestamo } from "./Prestamo";
import { IUsuario } from "./Usuario";

export interface IComprobante {
    idComprobante: number;
    numeroComprobante: number;
    usuario: IUsuario;
    prestamo: IPrestamo;
    fechaCreacion?: Date;
    fechaModificacion?: Date;
}
