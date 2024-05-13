import { CreateInscritoInput } from './create-inscrito.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInscritoInput extends PartialType(CreateInscritoInput) {
  @Field(() => String)
  id: string;
}
