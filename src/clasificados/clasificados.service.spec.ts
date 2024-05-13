import { Test, TestingModule } from '@nestjs/testing';
import { ClasificadosService } from './clasificados.service';

describe('ClasificadosService', () => {
  let service: ClasificadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasificadosService],
    }).compile();

    service = module.get<ClasificadosService>(ClasificadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
