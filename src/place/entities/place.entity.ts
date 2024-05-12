import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlaceImage } from './place-image.entity';

@ObjectType()
@Entity()
export class Place {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Id' })
  id: string;

  @Column()
  @Field(() => String, { description: 'The name of the place' })
  name: string;

  @Column()
  @Field(() => String, { description: 'A description of the place' })
  description: string;

  @Column()
  @Field(() => String, { description: 'The address of visiting the place' })
  address: string;

  @Column()
  @Field(() => Float, { description: 'The price of visiting the place' })
  price: number;

  @Column()
  @Field(() => String, { description: 'The start date of availability' })
  startDate: string;

  @OneToMany(() => PlaceImage, (placeImage) => placeImage.place, {
    cascade: true,
  })
  @Field(() => [PlaceImage], { description: 'list of images' })
  @JoinTable()
  images?: PlaceImage[];
}
