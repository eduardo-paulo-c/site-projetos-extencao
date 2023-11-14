/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Professor } from './professor.entity';

@Entity()
export class Projeto {
  @PrimaryGeneratedColumn()
  idprojeto: number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 250 })
  descricao: string;

  @Column()
  periodo: number;

  @Column({ length: 250 })
  cursos: string;

  @Column()
  cr: number;

  @ManyToOne(() => Professor, (professor) => professor.projetos)
  @JoinColumn({ name: 'idprofessor' })
  professor: Professor;
}