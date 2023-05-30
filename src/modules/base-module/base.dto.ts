import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class BaseDto {
  @IsString()
  @ApiProperty({
    type: String,
    example: 'abc',
    required: false,
  })
  firstName: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'def',
    required: false,
  })
  lastName: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
  })
  isActive: boolean | string;
}

export class BaseFindDto extends BaseDto {
  @IsUUID()
  @ApiProperty({
    type: String,
    example: uuidv4(),
    required: false,
  })
  id: string;
}
