import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user.model';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async create(user: UserEntity) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }
  async deleteOneByEmail(email: string) {
    return await this.userModel.deleteOne({ email }).exec();
  }
}
