import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ganadore {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
