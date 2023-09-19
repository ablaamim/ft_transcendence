import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    fortyTwoLogin(): Promise<void>;
    fortyTwoCallback(req: any, res: any): Promise<void>;
}
