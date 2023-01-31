import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'test@test.com' },
    { id: 2, firstName: 'Richard', lastName: 'Roe', email: 'test@test.com' },
  ];

  findById(id: number): User {
    return this.users.find((user) => user.id === Number(id));
  }
}
