import { ILibro } from "./Libro";

export interface IEjemplar {
    idEjemplar: number;
    libro: ILibro;
    conservacion: string;
    disponibilidad: number;
    fechaModificacion: Date;
  }
  