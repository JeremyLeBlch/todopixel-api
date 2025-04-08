import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {List} from "../../list/entity/list.entity";

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  list_id: string;

  @ManyToOne(() => List)
  @JoinColumn({ name: 'list_id' })
  list: List;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}