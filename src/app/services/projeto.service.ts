/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IProjeto } from '../domain/projeto.entity';

@Injectable()
export class ProjetoService {
  private static projetos: IProjeto[] = [
    {
      id: 1,
      titulo: 'Projeto 1',
      descricao: 'Descrição da projeto 1',
      periodo: 3,
      cursos: [1, 3, 4],
      cr: 5.0,
    },
    {
      id: 2,
      titulo: 'Projeto 2',
      descricao: 'Descrição da projeto 2',
      periodo: 2,
      cursos: [2, 4, 5],
      cr: 3.0,
    },
  ];

  async create(projeto: IProjeto): Promise<IProjeto> {
    projeto.id = ProjetoService.projetos.length + 1;
    ProjetoService.projetos.push(projeto);
    return projeto;
  }

  async update(id: string, projeto: IProjeto): Promise<IProjeto> {
    projeto.id = Number(id);
    ProjetoService.projetos = ProjetoService.projetos.map((_projeto) =>
      _projeto.id === Number(id) ? projeto : _projeto,
    );
    return projeto;
  }

  async get(id: string): Promise<IProjeto> {
    return ProjetoService.projetos.find(
      (projeto) => projeto.id === Number(id),
    );
  }

  async getAll(): Promise<IProjeto[]> {
    return ProjetoService.projetos;
  }

  async delete(id: string): Promise<void> {
    ProjetoService.projetos = ProjetoService.projetos.filter(
      (_Projeto) => _Projeto.id !== Number(id),
    );
  }
}
