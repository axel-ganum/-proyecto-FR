import { Test, TestingModule } from '@nestjs/testing';
import { EdicionesPreciosService } from './ediciones_precios.service';

describe('EdicionesPreciosService', () => {
  let service: EdicionesPreciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdicionesPreciosService],
    }).compile();

    service = module.get<EdicionesPreciosService>(EdicionesPreciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
