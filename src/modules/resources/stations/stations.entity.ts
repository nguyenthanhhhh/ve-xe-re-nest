import {
  BeforeRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { TripEntity } from '../trips/trips.entity';

@Entity({ name: 'stations' })
export class StationEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public name: string;

  @Column({ nullable: false })
  public address: string;

  @Column({ nullable: false })
  public province: string;

  @Column({ nullable: true })
  public avatar: string;

  @Column({ nullable: true })
  public slug: string;

  @OneToMany(() => TripEntity, (trips) => trips.fromStation)
  tripsStart: TripEntity[];

  @OneToMany(() => TripEntity, (trips) => trips.toStation)
  tripsEnd: TripEntity[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  public deletedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @BeforeRemove()
  deleteTimestamp() {
    this.deletedAt = new Date();
  }
}
