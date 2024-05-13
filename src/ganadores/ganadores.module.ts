import { Module } from '@nestjs/common';
import { GanadoresService } from './ganadores.service';
import { GanadoresResolver } from './ganadores.resolver';

@Module({
  providers: [GanadoresResolver, GanadoresService],
})
export class GanadoresModule {}
