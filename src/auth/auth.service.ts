import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { comparePassword } from '../util/bcrypt';
import { User } from "../users/user";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
    ) {}

    public async authenticateWithEmail(email, password): Promise<User> {

        const user = await this.userService.getUserByEmail(email) as User;

        const correctPassword = await comparePassword(password, user.password);


        if (correctPassword) {
            return user;
        } else {
            //password did not match
            //throw error
        }

    }
}
