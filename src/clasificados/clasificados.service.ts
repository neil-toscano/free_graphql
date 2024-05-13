import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateClasificadoInput } from './dto/create-clasificado.input';
import { UpdateClasificadoInput } from './dto/update-clasificado.input';
import { Repository } from 'typeorm';
import { Clasificado } from './entities/clasificado.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClasificadosService {
  constructor(
    @InjectRepository(Clasificado)
    private readonly clasificadoRepository: Repository<Clasificado>,
  ) {}
  async create(createClasificadoInput: CreateClasificadoInput) {
    try {
      const newItem = this.clasificadoRepository.create(createClasificadoInput);
      return await this.clasificadoRepository.save(newItem);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Something bad happened');
    }
  }

  async findAll() {
    try {
      const clasificados = await this.clasificadoRepository.find({});
      return clasificados;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Something bad happened');
    }
  }

  async findOne(id: string) {
    const inscrito = await this.clasificadoRepository.findOneBy({
      id: id,
    });
    if (!inscrito)
      throw new NotFoundException(`Clasificado with Id ${id} not found`);
    return inscrito;
  }

  async update(id: string, updateClasificadoInput: UpdateClasificadoInput) {
    await this.findOne(id);
    const clasificado = await this.clasificadoRepository.preload(
      updateClasificadoInput,
    );
    if (!clasificado)
      throw new NotFoundException(`Inscrito with Id ${id} not found`);
    return this.clasificadoRepository.save(clasificado);
  }

  remove(id: number) {
    return `This action removes a #${id} clasificado`;
  }
}
