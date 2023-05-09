import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TripData {
  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  id: number;

  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  @IsNotEmpty()
  fromStation: number;

  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  @IsNotEmpty()
  toStation: number;

  @ApiProperty({ type: Date, required: true })
  @IsDate()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ type: String })
  @IsString()
  avatar: string;

  @ApiProperty({ type: String })
  @IsString()
  slug: string;

  @ApiProperty({ type: Date, readOnly: true })
  createdAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  updatedAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  deletedAt: Date;
}
