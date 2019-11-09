import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { augmentSchema } from 'neo4j-graphql-js';
import { GQLConfigService } from './gqlconfig/gqlconfig.service';
import { v1 } from 'neo4j-driver';
import { Neo4jGraphqlInterceptor } from "./neo4j-graphql-interceptor";
import { UserResolver } from "./user/user-resolver";
import { TranslationsDirective } from "./directives/translation-directive";
import { BaseResolver} from "./base/type-resolver";
import { mergeSchemas } from 'graphql-tools';
import { SequenceDirective } from "./directives/sequence-directive";
import { CreatedByDirective } from "./directives/created-by-directive";
import { UpdatedByDirective } from "./directives/updated-by-directive";
import { config } from "../config/config";
import { Neo4jModule } from "../neo4j/neo4j.module";
import { UsersModule } from "../users/users.module";

/**
 * https://stackoverflow.com/questions/53544876/how-to-integrate-neo4j-database-nestjs-framework-and-graphql
 */

@Module({
    imports: [
        Neo4jModule,
        UsersModule,
        GraphQLModule.forRootAsync({
            useFactory: () => ({
            typePaths: ['./**/*.graphql'],
            transformSchema: (schema) => {

                const neo4jSchema = augmentSchema(schema);
                const s = mergeSchemas({ // append directives after neo4j graphql created blueprints
                    schemas: [neo4jSchema],
                    mergeDirectives: true,
                    schemaDirectives: {
                        translations: TranslationsDirective,
                        sequence: SequenceDirective,
                        createdBy: CreatedByDirective,
                        updatedBy: UpdatedByDirective,
                    },

                });

                return s;
            },
            playground: true,
            introspection: true,
            context: ({ req,  res }) => {
                return {
                    driver: v1.driver(
                        config.neo4j.host,
                        v1.auth.basic(config.neo4j.user, config.neo4j.password),
                    ), // TODO put this in service such that not every time new driver is generated
                    req,
                    res,
                    ids: [],
                    createdIDs: [],
                    updatedIDs: [],
                };
            },
        }),
        }),
    ],
    providers: [
        Neo4jGraphqlInterceptor,
        UserResolver,
        BaseResolver,
    ],
})
export class GqlModule {}