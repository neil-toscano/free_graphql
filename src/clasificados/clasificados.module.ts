import { Module } from '@nestjs/common';
import { ClasificadosService } from './clasificados.service';
import { ClasificadosResolver } from './clasificados.resolver';
import { Clasificado } from './entities/clasificado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule, TypeOrmModule.forFeature([Clasificado])],
  providers: [ClasificadosResolver, ClasificadosService],
  exports: [TypeOrmModule, ClasificadosService],
})
export class ClasificadosModule {}
