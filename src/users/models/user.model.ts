import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity } from '../interfaces/entity.interface';
import { Person } from '../interfaces/person.interface';

@ObjectType({ implements: [Entity, Person] })
@Directive('@key(fields: "id")')
export class User extends Person {
  @Field()
  email: string;
}
