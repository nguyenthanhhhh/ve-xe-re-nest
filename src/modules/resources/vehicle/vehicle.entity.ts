import {
  BeforeRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TripEntity } from '../trips/trips.entity';
import { Company_Vehicle_Entity } from '../company_vehicle/company_vehicle.entity';

@Entity({ name: 'vehicle' })
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public name: string;

  @OneToOne(() => TripEntity)
  @JoinColumn()
  tripId: TripEntity;

  @OneToMany(
    () => Company_Vehicle_Entity,
    (company_vehicle) => company_vehicle.vehicleId,
  )
  vehicleInf: Company_Vehicle_Entity;

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
