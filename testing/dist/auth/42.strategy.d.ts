import { profile } from 'passport-42';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
declare const FortyTwoStrategy_base: new (...args: any[]) => any;
export declare class FortyTwoStrategy extends FortyTwoStrategy_base {
    private readonly authService;
    private readonly configService;
    constructor(authService: AuthService, configService: ConfigService);
    validate(accessToken: string, refreshToken: string, profile: profile): Promise<any>;
}
export {};
