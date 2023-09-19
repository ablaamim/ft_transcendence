import { Repository } from 'typeorm';
import { User } from './user/user.entity';
export declare class AppService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    testDatabaseConnection(): Promise<any>;
}
