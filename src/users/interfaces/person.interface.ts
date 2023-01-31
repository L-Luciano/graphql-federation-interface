import { Field, InterfaceType } from '@nestjs/graphql';
import { Entity } from './entity.interface';

@InterfaceType({ implements: [Entity] })
export abstract class Person extends Entity {
  @Field(() => String)
  lastName: string;

  @Field(() => String)
  firstName: string;
}
