"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortyTwoStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_42_1 = require("passport-42");
const auth_service_1 = require("./auth.service");
const config_1 = require("@nestjs/config");
let FortyTwoStrategy = class FortyTwoStrategy extends (0, passport_1.PassportStrategy)(passport_42_1.Strategy, '42') {
    constructor(authService, configService) {
        super({
            clientID: 'u-s4t2ud-65ab0977cffd9a19029be468f89c9fb15afa3b136b97424531f3c6fd8a480006',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/callback',
        });
        this.authService = authService;
        this.configService = configService;
    }
    async validate(accessToken, refreshToken, profile) {
        const { name, emails, _json } = profile;
        const firstname = name?.givenName;
        const user = {
            username: firstname,
            email: emails[0].value,
            avatar_url: _json.image.versions.small,
        };
        return user;
    }
};
exports.FortyTwoStrategy = FortyTwoStrategy;
exports.FortyTwoStrategy = FortyTwoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, config_1.ConfigService])
], FortyTwoStrategy);
//# sourceMappingURL=42.strategy.js.map