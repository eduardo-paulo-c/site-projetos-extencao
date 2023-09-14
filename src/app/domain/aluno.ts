/* eslint-disable prettier/prettier */
import { IUsuario } from '../domain/usuario';

export interface IAluno extends IUsuario{
  matricula?: string;
}
  