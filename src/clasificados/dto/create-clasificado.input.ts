import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateClasificadoInput {
  @Field(() => String, { description: 'id' })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  idUser: string;

  @Field(() => String, {
    description: 'esta clasificado?',
    nullable: true,
  })
  @IsString()
  @MinLength(1)
  clasificado: string;
}
