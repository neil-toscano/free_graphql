import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Clasificado {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Id' })
  id: string;

  @Column()
  @Field(() => String, { description: 'The id of the user' })
  idUser: string;

  @Column()
  @Field(() => String, { description: 'ya clasifico?' })
  clasificado: string;
}
