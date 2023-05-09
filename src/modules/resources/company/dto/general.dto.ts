import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CompanyData {
  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  id: number;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: Date, readOnly: true })
  createdAt: Date;

  @ApiProperty({ type: Date, readOnly: true })
  updatedAt: Date;
}
