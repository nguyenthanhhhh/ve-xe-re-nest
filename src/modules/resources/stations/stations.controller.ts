import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationData } from './dto/general.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponseStationData } from './dto/response.dto';

@ApiTags('Station')
@UsePipes(new ValidationPipe())
@Controller('stations')
export class StationsController {
  constructor(private readonly stationService: StationsService) {}

  @ApiCreatedResponse({
    description: 'create station api',
    type: ResponseStationData,
  })
  @Post('create')
  createStation(@Body() body: StationData) {
    return this.stationService.createStations(body);
  }

  @ApiOkResponse({
    description: 'get all stations',
    type: ResponseStationData,
  })
  @Get('getAll')
  getAllStation() {
    return this.stationService.getAllStations();
  }

  @ApiOkResponse({
    description: 'get detail stations',
    type: StationData,
  })
  @Get('getDetail/:id')
  getDetailStation(@Param('id') id: number) {
    return this.stationService.getDetailStation(id);
  }

  @ApiOkResponse({
    description: 'update station',
    type: StationData,
  })
  @Put('update/:id')
  updateStation(@Param('id') id: number, @Body() body: StationData) {
    return this.stationService.updateStation(id, body);
  }

  @ApiOkResponse({
    description: 'delete station',
  })
  @Delete('delete/:id')
  deleteStation(@Param('id') id: number) {
    return this.stationService.deleteStation(id);
  }

  @ApiOkResponse({
    description: 'restore station',
  })
  @Patch('restore/:id')
  restoreStation(@Param('id') id: number) {
    return this.stationService.restoreStation(id);
  }

  @ApiOkResponse({
    description: 'destroy station',
  })
  @Delete('destroy/:id')
  destroyStation(@Param('id') id: number) {
    return this.stationService.destroyStation(id);
  }
}
