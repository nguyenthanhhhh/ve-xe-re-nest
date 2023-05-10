import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company_Vehicle_Entity } from './company_vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company_Vehicle_Entity])],
})
export class CompanyVehicleModule {}
