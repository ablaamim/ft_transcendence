import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtservice: JwtService,
  ) {}

  async createUser(user: User): Promise<User> {
    // console.log(user);
    return this.userRepository.save(user);
  }

  async removeUser(id: number): Promise<void> {
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.remove(user);
  }

  async getUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async updateUser(id :number, updateData :Partial<User>): Promise<User>{
    const user = await this.userRepository.findOneBy({id});
    if (!user)
      throw new NotFoundException('user not found assi mohammed');
    Object.assign(user, updateData);
    return this.userRepository.save(user);
  }
}