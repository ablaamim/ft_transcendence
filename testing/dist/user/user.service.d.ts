import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userRepository;
    private jwtservice;
    constructor(userRepository: Repository<User>, jwtservice: JwtService);
    createUser(user: User): Promise<User>;
    removeUser(id: number): Promise<void>;
    getUser(): Promise<User[]>;
    updateUser(id: number, updateData: Partial<User>): Promise<User>;
}
