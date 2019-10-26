import { NestInterceptor, Injectable, CallHandler, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { neo4jgraphql } from 'neo4j-graphql-js';

@Injectable()
export class CsrfInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ) {

        /**
         * add XSRF-TOKEN to cookie 
         */
        
        return next.handle();
    }
}
