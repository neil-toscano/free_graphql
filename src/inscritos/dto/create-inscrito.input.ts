import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateInscritoInput {
  @Field(() => String, { description: 'id' })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  idUser: string;

  @Field(() => String, {
    description: 'if the people have already payed',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  pay?: string;
}
