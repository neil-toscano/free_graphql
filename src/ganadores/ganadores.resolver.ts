import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GanadoresService } from './ganadores.service';
import { Ganadore } from './entities/ganadore.entity';
import { CreateGanadoreInput } from './dto/create-ganadore.input';
import { UpdateGanadoreInput } from './dto/update-ganadore.input';

@Resolver(() => Ganadore)
export class GanadoresResolver {
  constructor(private readonly ganadoresService: GanadoresService) {}

  @Mutation(() => Ganadore)
  createGanadore(
    @Args('createGanadoreInput') createGanadoreInput: CreateGanadoreInput,
  ) {
    return this.ganadoresService.create(createGanadoreInput);
  }

  @Query(() => [Ganadore], { name: 'ganadores' })
  findAll() {
    return this.ganadoresService.findAll();
  }

  @Query(() => Ganadore, { name: 'ganadore' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ganadoresService.findOne(id);
  }

  @Mutation(() => Ganadore)
  updateGanadore(
    @Args('updateGanadoreInput') updateGanadoreInput: UpdateGanadoreInput,
  ) {
    return this.ganadoresService.update(
      updateGanadoreInput.id,
      updateGanadoreInput,
    );
  }

  @Mutation(() => Ganadore)
  removeGanadore(@Args('id', { type: () => Int }) id: number) {
    return this.ganadoresService.remove(id);
  }
}
