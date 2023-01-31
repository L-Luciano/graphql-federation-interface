import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Entity {
  @Field(() => ID)
  id: number;
}
