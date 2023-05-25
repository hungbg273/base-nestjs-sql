import { Controller, Get } from '@nestjs/common';
import { BaseService } from './base.service';

@Controller()
export class BaseController {
  constructor(private readonly appService: BaseService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
