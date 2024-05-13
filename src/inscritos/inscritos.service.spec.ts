import { Test, TestingModule } from '@nestjs/testing';
import { InscritosService } from './inscritos.service';

describe('InscritosService', () => {
  let service: InscritosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscritosService],
    }).compile();

    service = module.get<InscritosService>(InscritosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
