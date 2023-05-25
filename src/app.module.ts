import { Module } from '@nestjs/common';
import { BaseModule } from './modules/base-module/base.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, BaseModule],
})
export class AppModule {}
