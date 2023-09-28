/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

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
}