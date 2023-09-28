/* eslint-disable prettier/prettier */
import { Controller, Body, Post, Param, Put, Get, Delete } from '@nestjs/common';
import { ProjetoService } from '../services/projeto.service';
import { Projeto } from '../domain/projeto.entity';
@Controller('/projetos')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) { }

  @Post()
  createProjeto(@Body() projeto: Projeto): Promise<Projeto> {
    console.log('Requisicao para criar um projeto');
    return this.projetoService.create(projeto);
  }

  @Put(':id')
  updateProjeto(
    @Param('id') id: string,
    @Body() Projeto: Projeto,
  ): Promise<Projeto> {
    console.log(`Requisicao para atualuzar projeto ${id}`);
    return this.projetoService.update(id, Projeto);
  }

  @Get()
  getProjetos(): Promise<Projeto[]> {
    console.log('Requisicao para retornar todos os projetos');
    return this.projetoService.getAll();
  }

  @Get(':id')
  getProjeto(@Param('id') id: string): Promise<Projeto> {
    console.log(`Requisicao para retornar projeto ${id}`);
    return this.projetoService.get(id);
  }

  @Delete(':id')
  deleteProjeto(@Param('id') id: string): Promise<void> {
    console.log(`Requisicao para deletar projeto ${id}`);
    return this.projetoService.delete(id);
  }
}