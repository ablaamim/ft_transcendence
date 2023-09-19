import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    testDatabaseConnection(): Promise<{
        message: string;
        result: any;
        error?: undefined;
    } | {
        message: string;
        error: any;
        result?: undefined;
    }>;
}
