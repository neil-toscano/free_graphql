import { Injectable } from '@nestjs/common';
import { CreateGanadoreInput } from './dto/create-ganadore.input';
import { UpdateGanadoreInput } from './dto/update-ganadore.input';

@Injectable()
export class GanadoresService {
  create(createGanadoreInput: CreateGanadoreInput) {
    return 'This action adds a new ganadore';
  }

  findAll() {
    return `This action returns all ganadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ganadore`;
  }

  update(id: number, updateGanadoreInput: UpdateGanadoreInput) {
    return `This action updates a #${id} ganadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} ganadore`;
  }
}
