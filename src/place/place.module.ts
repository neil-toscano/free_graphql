import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceResolver } from './place.resolver';
import { Place } from './entities/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceImage } from './entities/place-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place, PlaceImage])],
  providers: [PlaceResolver, PlaceService],
  exports: [TypeOrmModule, PlaceService],
})
export class PlaceModule {}
