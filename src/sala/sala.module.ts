import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaResolver } from './sala.resolver';

@Module({
  providers: [SalaResolver, SalaService],
})
export class SalaModule {}
