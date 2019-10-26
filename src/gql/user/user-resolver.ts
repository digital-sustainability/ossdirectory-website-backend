import { Resolver, Query, Args } from "@nestjs/graphql";
import { UseInterceptors } from "@nestjs/common";
import { Neo4jGraphqlInterceptor } from "../neo4j-graphql-interceptor";

@Resolver('User')
export class UserResolver {}
