import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClasificadosService } from './clasificados.service';
import { Clasificado } from './entities/clasificado.entity';
import { CreateClasificadoInput } from './dto/create-clasificado.input';
import { UpdateClasificadoInput } from './dto/update-clasificado.input';

@Resolver(() => Clasificado)
export class ClasificadosResolver {
  constructor(private readonly clasificadosService: ClasificadosService) {}

  @Mutation(() => Clasificado)
  createClasificado(
    @Args('createClasificadoInput')
    createClasificadoInput: CreateClasificadoInput,
  ) {
    return this.clasificadosService.create(createClasificadoInput);
  }

  @Query(() => [Clasificado], { name: 'allclasificados' })
  findAll() {
    return this.clasificadosService.findAll();
  }

  @Query(() => Clasificado, { name: 'findclasificado' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.clasificadosService.findOne(id);
  }

  @Mutation(() => Clasificado)
  updateClasificado(
    @Args('updateClasificadoInput')
    updateClasificadoInput: UpdateClasificadoInput,
  ) {
    return this.clasificadosService.update(
      updateClasificadoInput.id,
      updateClasificadoInput,
    );
  }

  @Mutation(() => Clasificado)
  removeClasificado(@Args('id', { type: () => Int }) id: number) {
    return this.clasificadosService.remove(id);
  }
}
