import { NestInterceptor, Injectable, CallHandler, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { neo4jgraphql } from 'neo4j-graphql-js';

/**
 * This interceptor does apply the default neo4j graphql js behavior
 */

@Injectable()
export class Neo4jGraphqlInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ) {
        const ctx = GqlExecutionContext.create(context);
        return neo4jgraphql( // try not to return the value but pass it on such that decorators could execute as well
          ctx.getRoot(),
          ctx.getArgs(),
          ctx.getContext(),
          ctx.getInfo(),
        );
    }
}
