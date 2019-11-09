import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "./auth.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email: string, password: string) {

        const user = await this.authService.authenticateWithEmail(email, password);
        
        return user;
        // validate user
        return { email: "fake", password: "gg"};
    }

}
