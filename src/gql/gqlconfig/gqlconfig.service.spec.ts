import { Test, TestingModule } from '@nestjs/testing';
import { GQLConfigService } from './gqlconfig.service';

describe('GQLConfigService', () => {
  let service: GQLConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GQLConfigService],
    }).compile();

    service = module.get<GQLConfigService>(GQLConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
