import { ILibro } from "./Libro";

export interface IEjemplar {
    idEjemplar: number;
    fechaCreacion: Date;
    libro: ILibro;
    conservacion: string;
    disponibilidad: number;
    fechaModificacion: Date;

  }
  