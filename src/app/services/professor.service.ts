/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IProfessor } from '../domain/professor.entity';

@Injectable()
export class ProfessorService {
  
  private static professores: IProfessor[] = [
    {
      id: 1,
      cpf: '12345678910',
      nome: 'Professor 01',
      email: 'professor01@gmail.com',
      senha: 'senha123',
      idade: 24,
    },
    {
      id: 2,
      cpf: '12345678910',
      nome: 'Professor 02',
      email: 'professor02@gmail.com',
      senha: 'senha123',
      idade: 25,
    },
  ];

  async create(professor: IProfessor): Promise<IProfessor> {
    professor.id = ProfessorService.professores.length + 1;
    ProfessorService.professores.push(professor);
    return professor;
  }

  async update(id: string, professor: IProfessor): Promise<IProfessor> {
    professor.id = Number(id);
    ProfessorService.professores = ProfessorService.professores.map((_professor) =>
      _professor.id === Number(id) ? professor : _professor,
    );
    return professor;
  }

  async getAll(): Promise<IProfessor[]> {
    return ProfessorService.professores;
  }

  async get(id: string): Promise<IProfessor> {
    return ProfessorService.professores.find(
      (professor) => professor.id === Number(id),
    );
  }

  async delete(id: string): Promise<void> {
    ProfessorService.professores = ProfessorService.professores.filter(
      (_professor) => _professor.id !== Number(id),
    );
  }
}