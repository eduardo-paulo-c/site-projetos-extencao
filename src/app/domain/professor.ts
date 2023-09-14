/* eslint-disable prettier/prettier */
import { IUsuario } from '../domain/usuario';

export interface IProfessor extends IUsuario {
  matricula_prof?: string;
}
  