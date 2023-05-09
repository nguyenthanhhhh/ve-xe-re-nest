import {
  BeforeRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StationEntity } from '../stations/stations.entity';

@Entity({ name: 'trips' })
export class TripEntity {
  @PrimaryColumn()
  public id: number;

  @ManyToOne(() => StationEntity, (stations) => stations.id)
  fromStation: StationEntity;

  @ManyToOne(() => StationEntity, (stations) => stations.id)
  toStation: StationEntity;

  @Column({ nullable: false })
  public startTime: Date;

  @Column({ nullable: false })
  public price: number;

  @Column({ nullable: true })
  public avatar: string;

  @Column({ nullable: true })
  public slug: string;

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
