import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { AppModule } from 'src/app.module';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  imports:[TypeOrmModule.forFeature([User]), PassportModule.register(
    {defaultStrategy: 'jwt'
  }), JwtModule.register({
    secret: "abdessamad",
    signOptions: {
      expiresIn: 3600
    }

  })],
  exports: [TypeOrmModule],
  controllers: [UserController,],
  providers: [UserService,JwtService],
})
export class UserModule {}
