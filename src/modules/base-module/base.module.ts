import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './base.entity';
import { BaseRepository } from './base.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [BaseController],
  providers: [BaseService, BaseRepository],
})
export class BaseModule {}
