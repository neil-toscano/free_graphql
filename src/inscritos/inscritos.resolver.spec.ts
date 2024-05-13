import { Test, TestingModule } from '@nestjs/testing';
import { InscritosResolver } from './inscritos.resolver';
import { InscritosService } from './inscritos.service';

describe('InscritosResolver', () => {
  let resolver: InscritosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscritosResolver, InscritosService],
    }).compile();

    resolver = module.get<InscritosResolver>(InscritosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
