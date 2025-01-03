import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column({ name: 'is_completed' })
  is_completed: boolean;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
