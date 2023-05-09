import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VehicleData {
  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  id: number;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  @IsNotEmpty()
  tripId: number;

  @ApiProperty({ type: Date, readOnly: true })
  createdAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  updatedAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  deletedAt: Date;
}
