import { hashPassword, comparePassword } from "../util/bcrypt";

export class User {

    sequence: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    public changePassword(oldPassword: string, newPassword: string) {
        if (comparePassword(oldPassword, this.password)) {
            this.password = newPassword;
        } else {
            // password did not match
        }
    }

}
