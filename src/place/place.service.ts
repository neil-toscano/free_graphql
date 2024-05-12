import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { DataSource, Repository } from 'typeorm';
import { PlaceImage } from './entities/place-image.entity';

@Injectable()
export class PlaceService {
  private readonly logger = new Logger(PlaceService.name);

  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
    @InjectRepository(PlaceImage)
    private readonly imageRepository: Repository<PlaceImage>,
    private readonly datasource: DataSource,
  ) {}

  async create(createPlaceInput: CreatePlaceInput) {
    try {
      const { images = [], ...placeDetails } = createPlaceInput;

      const placeImages = images.map((imageUrl) =>
        this.imageRepository.create({ url: imageUrl }),
      );

      const place = this.placeRepository.create({
        ...placeDetails,
      });

      place.images = placeImages;

      const todo = await this.placeRepository.save(place);
      return todo;
    } catch (error) {
      this.logger.log(error);
      throw new InternalServerErrorException('Something bad happened');
    }
  }

  async findAll(): Promise<Place[]> {
    try {
      const places = await this.placeRepository.find({
        relations: { images: true },
      });
      return places;
    } catch (error) {
      this.logger.log(error);
      throw new InternalServerErrorException('Something bad happened');
    }
  }

  async findOne(id: string): Promise<Place> {
    const place = await this.placeRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        images: true,
      },
    });
    if (!place) throw new NotFoundException(`Place with id ${id} not found`);
    return place;
  }

  async update(id: string, updatePlaceInput: UpdatePlaceInput) {
    const { images, ...toUpdate } = updatePlaceInput;
    const place = await this.placeRepository.preload({
      id: id,
      ...toUpdate,
    });

    if (!place) throw new NotFoundException(`Place with id ${id} not found`);
    const queryRunner = this.datasource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (images) {
        await queryRunner.manager.delete(PlaceImage, { place: { id } });
        place.images = images.map((imageUrl) =>
          this.imageRepository.create({ url: imageUrl }),
        );
      }

      await queryRunner.manager.save(place);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return this.findOne(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw new BadRequestException('error');
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.placeRepository.remove(product);
    return `this action removes  #${id} place`;
  }
}
