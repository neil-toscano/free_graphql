import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { PlaceModule } from 'src/place/place.module';

@Module({
  imports: [PlaceModule],
  providers: [SeedResolver, SeedService],
})
export class SeedModule {}
