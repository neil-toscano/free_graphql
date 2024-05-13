import { Test, TestingModule } from '@nestjs/testing';
import { GanadoresService } from './ganadores.service';

describe('GanadoresService', () => {
  let service: GanadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GanadoresService],
    }).compile();

    service = module.get<GanadoresService>(GanadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
