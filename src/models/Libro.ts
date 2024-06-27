import { IAutor } from "./Autor";
export interface ILibro {
  idLibro: number;
  Autor: IAutor;
  nombre: string;
  categoria: string;
  editorial: string;
  estado: string;
  fechaModificacion: Date;

  }
  