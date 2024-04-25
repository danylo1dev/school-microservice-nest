import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/repositories/user.repository';
import { UserRole } from '@school/interfaces';
import { UserEntity } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}
  async register({ email, password, displayName }: any) {
    const oldUser = await this.userRepository.findOneByEmail(email);
    if (oldUser) {
      throw new Error('user alredy exist');
    }
    const newUserEntity = await new UserEntity({
      displayName,
      email,
      passwordHash: '',
      role: UserRole.Student,
    }).setPassword(password);

    const newUser = await this.userRepository.create(newUserEntity);
    return { email: newUser.email };
  }
  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOneByEmail(email);
    if (!user) {
      throw new Error('unvalid user data');
    }
    const userEntity = await new UserEntity(user);
    const isCorectPassword = await userEntity.validatePassword(password);
    if (!isCorectPassword) {
      throw new Error('unvalid user data');
    }
    return { id: user._id };
  }

  async login(id: string) {
    return { access_token: await this.jwtService.signAsync({ id }) };
  }
}
