import {UserRole} from './user-role.enum';
import {UserCity} from './user-city.enum';

export interface User {
  _id?: string;
  name: string;
  email: string;
  dateBirth: Date;
  city: UserCity;
  avatar: string;
  role: UserRole;
  rating?: number;
  passwordHash: string;
}
