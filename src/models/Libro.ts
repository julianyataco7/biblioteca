import { IAutor } from "./Autor";
export interface ILibro {
  Autor: IAutor;
  nombre: string;
  categoria: string;
  editorial: string;
  estado: string;
  fechaModificacion: Date;

  }
  