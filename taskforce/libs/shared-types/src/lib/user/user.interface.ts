import {UserRole} from './user-role.enum';

export interface User {
  _id?: string;
  name: string;
  email: string;
  dateBirth: Date;
  city: string;
  avatar: string;
  role: UserRole;
  passwordHash: string;
}
