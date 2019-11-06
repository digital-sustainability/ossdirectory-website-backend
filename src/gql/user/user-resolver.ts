import { Resolver, Query, Args, Context, Info, Parent, Mutation } from "@nestjs/graphql";
import { UseInterceptors, Request, UseGuards } from "@nestjs/common";
import { Neo4jGraphqlInterceptor } from "../neo4j-graphql-interceptor";
import v1 from "neo4j-driver";
import { AuthGuard } from "@nestjs/passport";
import { LoginGuard } from "../../auth/login.guard";
import { AuthService } from "../../auth/auth.service";
import { UsersService } from "../../users/users.service";
import { User } from "../../users/user";
import { neo4jgraphql, cypherMutation } from "neo4j-graphql-js";

@Resolver('User')
export class UserResolver {

    constructor(
        private usersService: UsersService,
    ) {}

    @UseGuards(LoginGuard)
    @Query()
    async login(@Context() ctx) {
        return ctx.req.user;
    }

    @Mutation()
    async CreateUser(
        @Parent() root: any,
        @Args() args: User,
        @Context() ctx: any,
        @Info() info: any,
    ) {
        const user = await this.usersService.createUser(args);
        return neo4jgraphql(root, user, ctx, info);
    }

}
