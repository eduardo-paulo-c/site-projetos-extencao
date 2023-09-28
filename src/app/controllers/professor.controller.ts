/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
//import { IProfessor } from '../domain/professor';
import { ProfessorService } from '../services/professor.service';

@Controller('/professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) { }
  
}