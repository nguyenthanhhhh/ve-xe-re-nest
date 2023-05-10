import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleEntity } from '../vehicle/vehicle.entity';
import { CompanyEntity } from '../company/company.entity';

@Entity({ name: 'company_vehicle' })
export class Company_Vehicle_Entity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => VehicleEntity, (vehicle) => vehicle.id)
  vehicleId: VehicleEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.id)
  companyId: CompanyEntity;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
