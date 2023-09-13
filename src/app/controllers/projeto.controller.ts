import { Controller, Get } from '@nestjs/common';
import { ProjetoService } from '../services/projeto.service';
import { IProjeto } from '../domain/projeto';
@Controller('/projetos')
export class ProjetoController {
  constructor(private readonly ProjetoService: ProjetoService) { }

  @Get()
  getHello(): string {
    return 'this.ProjetoService.getHello()';
  }
}