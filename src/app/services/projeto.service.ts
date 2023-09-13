import { Injectable } from '@nestjs/common';
import { IProjeto } from '../domain/projeto';

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
  ];

  async getAll(): Promise<IProjeto[]> {
    return ProjetoService.projetos;
  }
}
