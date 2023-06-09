import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class StationData {
  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  province: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ type: String, readOnly: true })
  slug: string;

  @ApiProperty({ type: Date, readOnly: true })
  createdAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  updatedAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  deletedAt: Date;
}
