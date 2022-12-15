import {Document} from 'mongoose';
import {User, UserRole, UserCity} from '@taskforce/shared-types';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
  collection: 'users',
})
export class SiteUserModel extends Document implements User {
  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    type: String,
    enum: UserCity,
    default: UserCity.SaintPetersburg,
  })
  public city: UserCity;

  @Prop()
  public avatar: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.Customer,
  })
  public role: UserRole;

  @Prop()
  public rating: number;

  @Prop({
    required: true,
  })
  public passwordHash: string;

}

export const SiteUserSchema = SchemaFactory.createForClass(SiteUserModel);
