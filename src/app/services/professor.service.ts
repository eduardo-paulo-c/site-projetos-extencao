/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Professor } from '../domain/professor.entity';

@Injectable()
export class ProfessorService {
  
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(professor: Professor): Promise<Professor> {
    return this.professorRepository.save(professor)
  }

  async update(id: string, professor: Professor): Promise<Professor> {
    const existingProfessor = await this.professorRepository.findOneBy({
      idprofessor: Number(id),
    });
    existingProfessor.cpf = professor.cpf;
    existingProfessor.nome = professor.nome;
    existingProfessor.email = professor.email;
    existingProfessor.senha = professor.senha;
    return this.professorRepository.save(existingProfessor);
  }

  async getAll(): Promise<Professor[]> {
    return this.professorRepository.find()
  }

  async get(id: string): Promise<Professor> {
    return this.professorRepository.findOneBy({ idprofessor: Number(id)} )
  }

  async delete(id: string): Promise<void> {
    this.professorRepository.delete({ idprofessor: Number(id)} )
  }
}