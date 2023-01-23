import {User} from '../user/user.interface';

export type JwtPayload = Pick<User, 'email' | 'name' | 'role'> & {
  sub: string;
};
