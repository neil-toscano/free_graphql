import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGanadoreInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
