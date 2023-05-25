import { Test, TestingModule } from '@nestjs/testing';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';

describe('AppController', () => {
  let appController: BaseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BaseController],
      providers: [BaseService],
    }).compile();

    appController = app.get<BaseController>(BaseController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
