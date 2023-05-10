import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { loadConfig } from './config';
import { StationsModule } from './modules/resources/stations/stations.module';
import { TripsModule } from './modules/resources/trips/trips.module';
import { CompanyModule } from './modules/resources/company/company.module';
import { VehicleModule } from './modules/resources/vehicle/vehicle.module';
import { CompanyVehicleModule } from './modules/resources/company_vehicle/company_vehicle.module';

@Module({
  imports: [
    loadConfig(),
    DatabaseModule,
    StationsModule,
    TripsModule,
    CompanyModule,
    VehicleModule,
    CompanyVehicleModule,
  ],
})
export class AppModule {}
