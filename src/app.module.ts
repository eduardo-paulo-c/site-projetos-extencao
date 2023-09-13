import { Module } from '@nestjs/common';
import { ProjetoController } from './app/controllers/projeto.controller';
import { ProjetoService } from './app/services/projeto.service';

@Module({
  imports: [],
  controllers: [ProjetoController],
  providers: [ProjetoService],
})
export class AppModule {}
