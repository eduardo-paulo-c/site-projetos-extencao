/* eslint-disable prettier/prettier */
import { Controller, Body, Post, Put, Param, Get, Delete } from '@nestjs/common';
import { IProfessor } from '../domain/professor.entity';
import { ProfessorService } from '../services/professor.service';

@Controller('/professores')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) { }

  @Post()
  createProfessor(@Body() professor: IProfessor): Promise<IProfessor> {
    console.log('Requisicao para criar um professor');
    return this.professorService.create(professor);
  }
  
  @Put(':id')
  updateProfessor(
    @Param('id') id: string,
    @Body() professor: IProfessor,
  ): Promise<IProfessor> {
    console.log(`Requisicao para atualuzar professor ${id}`);
    return this.professorService.update(id, professor);
  }

  @Get()
  getProfessors(): Promise<IProfessor[]> {
    console.log('Requisicao para retornar todos os professores');
    return this.professorService.getAll();
  }

  @Get(':id')
  getProfessor(@Param('id') id: string): Promise<IProfessor> {
    console.log(`Requisicao para retornar professor ${id}`);
    return this.professorService.get(id);
  }

  @Delete(':id')
  deleteProfessor(@Param('id') id: string): Promise<void> {
    console.log(`Requisicao para deletar professor ${id}`);
    return this.professorService.delete(id);
  }
}