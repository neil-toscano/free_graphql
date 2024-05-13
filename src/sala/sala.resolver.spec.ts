import { Test, TestingModule } from '@nestjs/testing';
import { SalaResolver } from './sala.resolver';
import { SalaService } from './sala.service';

describe('SalaResolver', () => {
  let resolver: SalaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalaResolver, SalaService],
    }).compile();

    resolver = module.get<SalaResolver>(SalaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
