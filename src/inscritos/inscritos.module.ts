import { Module } from '@nestjs/common';
import { InscritosService } from './inscritos.service';
import { InscritosResolver } from './inscritos.resolver';
import { Inscrito } from './entities/inscrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule, TypeOrmModule.forFeature([Inscrito])],
  providers: [InscritosResolver, InscritosService],
  exports: [TypeOrmModule, InscritosService],
})
export class InscritosModule {}
