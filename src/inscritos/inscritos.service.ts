import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateInscritoInput } from './dto/create-inscrito.input';
import { UpdateInscritoInput } from './dto/update-inscrito.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Inscrito } from './entities/inscrito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InscritosService {
  constructor(
    @InjectRepository(Inscrito)
    private readonly inscritoRepository: Repository<Inscrito>,
  ) {}
  async create(createInscritoInput: CreateInscritoInput) {
    try {
      const newItem = this.inscritoRepository.create(createInscritoInput);
      return await this.inscritoRepository.save(newItem);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Something bad happened');
    }
  }

  async findAll() {
    try {
      const inscritos = await this.inscritoRepository.find({});
      return inscritos;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Something bad happened');
    }
  }

  async findOne(id: string): Promise<Inscrito> {
    const inscrito = await this.inscritoRepository.findOneBy({
      id: id,
    });
    if (!inscrito)
      throw new NotFoundException(`Inscrito with Id ${id} not found`);
    return inscrito;
  }
  async findOneByIdUser(idUser: string): Promise<Inscrito> {
    const inscrito = await this.inscritoRepository.findOneBy({
      idUser: idUser,
    });
    if (!inscrito)
      throw new NotFoundException(`Inscrito with Id ${idUser} not found`);
    return inscrito;
  }

  async update(id: string, updateInscritoInput: UpdateInscritoInput) {
    await this.findOne(id);
    const item = await this.inscritoRepository.preload(updateInscritoInput);
    if (!item) throw new NotFoundException(`Inscrito with Id ${id} not found`);
    return this.inscritoRepository.save(item);
  }

  remove(id: number) {
    return `This action removes a #${id} inscrito`;
  }
}
