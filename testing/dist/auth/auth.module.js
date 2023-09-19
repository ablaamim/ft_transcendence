"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const _42_strategy_1 = require("./42.strategy");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../user/user.service");
const user_module_1 = require("../user/user.module");
const user_controller_1 = require("../user/user.controller");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), passport_1.PassportModule.register({ defaultStrategy: '42' }), user_module_1.UserModule],
        controllers: [auth_controller_1.AuthController, user_controller_1.UserController],
        providers: [auth_service_1.AuthService, _42_strategy_1.FortyTwoStrategy, user_service_1.UserService, jwt_1.JwtService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map