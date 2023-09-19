import { Controller , Get, Param, Put, Delete, Body } from '@nestjs/common';
import { UserService} from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    
    @Get()
    async getUser() : Promise<User[]> {
      return await this.userService.getUser();
    }
    
    @Delete(':id')
    async removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
    }
    
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUser: Partial<User>){
      return await this.userService.updateUser(id, updateUser);
    }
}
