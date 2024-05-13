import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SalaService } from './sala.service';
import { Sala } from './entities/sala.entity';
import { CreateSalaInput } from './dto/create-sala.input';
import { UpdateSalaInput } from './dto/update-sala.input';

@Resolver(() => Sala)
export class SalaResolver {
  constructor(private readonly salaService: SalaService) {}

  @Mutation(() => Sala)
  createSala(@Args('createSalaInput') createSalaInput: CreateSalaInput) {
    return this.salaService.create(createSalaInput);
  }

  @Query(() => [Sala], { name: 'sala' })
  findAll() {
    return this.salaService.findAll();
  }

  @Query(() => Sala, { name: 'sala' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.salaService.findOne(id);
  }

  @Mutation(() => Sala)
  updateSala(@Args('updateSalaInput') updateSalaInput: UpdateSalaInput) {
    return this.salaService.update(updateSalaInput.id, updateSalaInput);
  }

  @Mutation(() => Sala)
  removeSala(@Args('id', { type: () => Int }) id: number) {
    return this.salaService.remove(id);
  }
}
