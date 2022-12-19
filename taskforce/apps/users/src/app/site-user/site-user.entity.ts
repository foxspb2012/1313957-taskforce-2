import {User, UserRole, UserCity} from '@taskforce/shared-types';
import {genSalt, hash, compare} from 'bcrypt';
import {SALT_ROUNDS} from './site-user.constant';

export class SiteUserEntity implements User {
  public _id: string;
  public name: string;
  public email: string;
  public dateBirth: Date;
  public city: UserCity;
  public avatar: string;
  public role: UserRole;
  public rating: number;
  public passwordHash: string;

  public async setPassword(password: string): Promise<SiteUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  constructor(siteUser: User) {
    this.fillEntity(siteUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(siteUser: User) {
    this._id = siteUser._id;
    this.name = siteUser.name;
    this.email = siteUser.email;
    this.dateBirth = siteUser.dateBirth;
    this.city = siteUser.city;
    this.avatar = siteUser.avatar;
    this.role = siteUser.role;
    this.rating = siteUser.rating;
    this.passwordHash = siteUser.passwordHash;
  }
}
