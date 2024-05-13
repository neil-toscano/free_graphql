import { CreateClasificadoInput } from './create-clasificado.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClasificadoInput extends PartialType(
  CreateClasificadoInput,
) {
  @Field(() => String)
  id: string;
}
