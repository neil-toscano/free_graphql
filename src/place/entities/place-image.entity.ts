import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Place } from './place.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class PlaceImage {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('text')
  @Field(() => String)
  url: string;

  @ManyToOne(() => Place, (place) => place.images, {
    onDelete: 'CASCADE',
    lazy: true,
    eager: true,
  })
  @Field(() => Place)
  place: Place;
}
