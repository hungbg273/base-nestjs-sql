import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BaseService } from './base.service';
import { BaseDto, BaseFindDto } from './base.dto';

@Controller()
export class BaseController {
  constructor(private readonly appService: BaseService) {}

  @Get()
  findAll(@Query() baseDto: BaseFindDto) {
    return this.appService.getAll(baseDto);
  }

  @Post('/createUser')
  createNewUser(@Body() baseDto: BaseDto) {
    return this.appService.createNewUser(baseDto);
  }
}
