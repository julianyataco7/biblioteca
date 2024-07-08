import { IPrestamo } from "./Prestamo";
import { IUsuario } from "./Usuario";

export interface IComprobante {
    idComprobante: number;
    usuario: IUsuario;
    prestamo: IPrestamo;
    fechaEmision?: Date;
    fechaModificacion?: Date;
}
