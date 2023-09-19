import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): Promise<User[]>;
    removeUser(id: number): Promise<void>;
    updateUser(id: number, updateUser: Partial<User>): Promise<User>;
}
