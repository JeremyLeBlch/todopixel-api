import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import {Task} from "../../task/entity/task.entity";
import {User} from "../../user/entity/user.entity";

@Entity('lists')
export class List {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @ManyToOne(() => User, (user) => user.lists)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Task, (task) => task.list)
  tasks: Task[];
}