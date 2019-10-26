import { Test, TestingModule } from '@nestjs/testing';
import { AngularController } from './angular.controller';

describe('Angular Controller', () => {
  let controller: AngularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AngularController],
    }).compile();

    controller = module.get<AngularController>(AngularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
