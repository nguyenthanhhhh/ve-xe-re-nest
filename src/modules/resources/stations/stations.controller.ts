import { Body, Controller, Post } from '@nestjs/common';

@Controller('stations')
export class StationsController {
  @Post()
  createStation(@Body() data) {}
}
