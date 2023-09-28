/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Projeto } from '../domain/projeto.entity';




@Injectable()
export class ProjetoService {
  
  constructor(
    @Inject('PROJETO_REPOSITORY')
    private projetoRepository: Repository<Projeto>,
  ) {}

  async create(projeto: Projeto): Promise<Projeto> {
    return this.projetoRepository.save(projeto);
  }

  async update(id: string, projeto: Projeto): Promise<Projeto> {
    const existingProjeto = await this.projetoRepository.findOneBy({
      id: Number(id),
    });
    existingProjeto.titulo = projeto.titulo;
    existingProjeto.descricao = projeto.descricao;
    existingProjeto.periodo = projeto.periodo;
    existingProjeto.cursos = projeto.cursos;
    existingProjeto.cr = projeto.cr;
    return this.projetoRepository.save(existingProjeto);
  }

  async get(id: string): Promise<Projeto> {
    return this.projetoRepository.findOneBy({ id: Number(id)})
  }


  async getAll(): Promise<Projeto[]> {
    return this.projetoRepository.find();
  }

  async delete(id: string): Promise<void> {
    this.projetoRepository.delete({ id: Number(id) });
  }
}
