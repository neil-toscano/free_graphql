import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InscritosService } from './inscritos.service';
import { Inscrito } from './entities/inscrito.entity';
import { CreateInscritoInput } from './dto/create-inscrito.input';
import { UpdateInscritoInput } from './dto/update-inscrito.input';

@Resolver(() => Inscrito)
export class InscritosResolver {
  constructor(private readonly inscritosService: InscritosService) {}

  @Mutation(() => Inscrito, { name: 'createInscrito' })
  createInscrito(
    @Args('createInscritoInput') createInscritoInput: CreateInscritoInput,
  ) {
    return this.inscritosService.create(createInscritoInput);
  }

  @Query(() => [Inscrito], { name: 'findAllInscrito' })
  findAll() {
    return this.inscritosService.findAll();
  }

  @Query(() => Inscrito, { name: 'findOneInscrito' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.inscritosService.findOneByIdUser(id);
  }

  @Mutation(() => Inscrito, { name: 'updateInscrito' })
  updateInscrito(
    @Args('updateInscritoInput') updateInscritoInput: UpdateInscritoInput,
  ) {
    return this.inscritosService.update(
      updateInscritoInput.id,
      updateInscritoInput,
    );
  }

  @Mutation(() => Inscrito)
  removeInscrito(@Args('id', { type: () => Int }) id: number) {
    return this.inscritosService.remove(id);
  }
}
