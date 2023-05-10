import { Injectable } from '@nestjs/common';
import { StationData } from './dto/general.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StationEntity } from './stations.entity';
import { Repository } from 'typeorm';
import slugify from 'slugify';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(StationEntity)
    private readonly stationRepository: Repository<StationEntity>,
  ) {}

  async createStations(data: StationData) {
    try {
      const newStation = this.stationRepository.create(data);
      newStation.slug = slugify(newStation.name, { strict: true, lower: true });
      await this.stationRepository.save(newStation);
      console.log(newStation);
      return newStation;
    } catch (error) {
      console.log('[StationService][createStations] error ' + error);
      throw error;
    }
  }

  async getAllStations() {
    try {
      const allStation = await this.stationRepository.find();
      return allStation;
    } catch (error) {
      console.log('[StationService][getAllStations] error ' + error);
      throw error;
    }
  }

  async getDetailStation(id: number) {
    try {
      const station = await this.stationRepository.findOneBy({
        id: id,
      });
      return station;
    } catch (error) {
      console.log('[StationService][getDetailStations] error ' + error);
      throw error;
    }
  }

  async updateStation(id: number, data: StationData) {
    try {
      const slug = slugify(data.name, {
        lower: true,
        strict: true,
      });
      const dataSlug = { ...data, slug };
      const stationUpdate = this.stationRepository.update(id, dataSlug);
      return stationUpdate;
    } catch (error) {
      console.log('[StationService][updateStation] error ' + error);
      throw error;
    }
  }

  async deleteStation(id: number) {
    try {
      await this.stationRepository
        .createQueryBuilder()
        .softDelete()
        .where('id=:id', { id })
        .execute();
      console.log('soft delete success');
    } catch (error) {
      console.log('[StationService][deleteStation] error ' + error);
      throw error;
    }
  }

  async restoreStation(id: number) {
    try {
      await this.stationRepository
        .createQueryBuilder()
        .restore()
        .where('id=:id', { id })
        .execute();
      console.log('restore success');
    } catch (error) {
      console.log('[StationService][restoreStation] error ' + error);
      throw error;
    }
  }

  async destroyStation(id: number) {
    try {
      await this.stationRepository
        .createQueryBuilder()
        .delete()
        .where('id=:id', { id })
        .execute();
      console.log('destroy success');
    } catch (error) {
      console.log('[StationService][destroyStation] error ' + error);
      throw error;
    }
  }
}
