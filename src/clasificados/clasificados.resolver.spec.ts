import { Test, TestingModule } from '@nestjs/testing';
import { ClasificadosResolver } from './clasificados.resolver';
import { ClasificadosService } from './clasificados.service';

describe('ClasificadosResolver', () => {
  let resolver: ClasificadosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasificadosResolver, ClasificadosService],
    }).compile();

    resolver = module.get<ClasificadosResolver>(ClasificadosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
