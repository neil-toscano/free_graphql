import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CommonModule } from 'src/common/common.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [CloudinaryModule, CommonModule],
})
export class FilesModule {}
