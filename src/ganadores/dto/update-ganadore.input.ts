import { CreateGanadoreInput } from './create-ganadore.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGanadoreInput extends PartialType(CreateGanadoreInput) {
  @Field(() => Int)
  id: number;
}
