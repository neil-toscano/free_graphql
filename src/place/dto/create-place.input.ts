import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

@InputType()
export class CreatePlaceInput {
  @Field(() => String, { description: 'The name of the place' })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @Field(() => String, { description: 'A description of the place' })
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => String, { description: 'The price of visiting the place' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @Field(() => Float, { description: 'The price of visiting the place' })
  @IsNotEmpty()
  @IsPositive()
  @Min(0)
  @IsInt()
  price: number;

  @Field(() => String, { description: 'The start date of availability' })
  @IsString()
  startDate: string;

  @Field(() => [String], { nullable: true })
  @IsArray({ each: true })
  images?: string[];
}
