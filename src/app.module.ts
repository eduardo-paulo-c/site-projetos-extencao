/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjetoController } from './app/controllers/projeto.controller';
import { ProjetoService } from './app/services/projeto.service';
import { ProfessorController } from './app/controllers/professor.controller';
import { ProfessorService } from './app/services/professor.service';
import { DatabaseModule } from './app/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ProjetoController, ProfessorController],
  providers: [ProjetoService, ProfessorService],
})
export class AppModule {}
