import { Injectable } from '@nestjs/common';
import { User } from "./user";
import { Neo4jService } from "../neo4j/neo4j.service";
import { StatementResult } from 'neo4j-driver/types/v1';
import { hashPassword } from "../util/bcrypt";

@Injectable()
export class UsersService {


    constructor(
        private neo4j: Neo4jService,
    ) {

    }

    public getUserByEmail(email: string): Promise<User | StatementResult> {
        const query = `MATCH (u:User { email: $email}) RETURN u`;
        const variables = { email };
        const session = this.neo4j.driver.session();
        return session.run(query, variables).then((result) => result.records[0].get(0).properties);
    }

    public getUserById(id: string): Promise<User | StatementResult> {
        const query = `MATCH (u:User { sequence: $id}) RETURN u`;
        const variables = { id };
        const session = this.neo4j.driver.session();
        return session.run(query, variables).then((result) => result.records[0].get(0).properties);
    }

    public async createUser(user: User): Promise<User> {
        user.password = await hashPassword(user.password);
        return user;
    }

    public updateUser(): User {
        return new User();
    }
}
