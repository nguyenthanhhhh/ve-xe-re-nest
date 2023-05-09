import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { loadConfig } from './config';
import { StationsModule } from './modules/resources/stations/stations.module';
import { TripsModule } from './modules/resources/trips/trips.module';

@Module({
  imports: [loadConfig(), DatabaseModule, StationsModule, TripsModule],
})
export class AppModule {}
