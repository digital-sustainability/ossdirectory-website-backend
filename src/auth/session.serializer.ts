import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { User } from "../users/user";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private userService: UsersService) {
        super();
    }
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user.sequence);
  }
    async deserializeUser(payload: any, done: (err: Error, payload: User) => void): Promise<any> {
        const user = await this.userService.getUserById(payload) as User;
        done(null, user);
    }
}
