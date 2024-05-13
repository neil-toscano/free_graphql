import { Test, TestingModule } from '@nestjs/testing';
import { GanadoresResolver } from './ganadores.resolver';
import { GanadoresService } from './ganadores.service';

describe('GanadoresResolver', () => {
  let resolver: GanadoresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GanadoresResolver, GanadoresService],
    }).compile();

    resolver = module.get<GanadoresResolver>(GanadoresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
