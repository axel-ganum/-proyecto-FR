import { Test, TestingModule } from '@nestjs/testing';
import { EdicionesPreciosController } from './ediciones_precios.controller';

describe('EdicionesPreciosController', () => {
  let controller: EdicionesPreciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdicionesPreciosController],
    }).compile();

    controller = module.get<EdicionesPreciosController>(EdicionesPreciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
