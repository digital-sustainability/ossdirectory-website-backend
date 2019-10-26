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

@Module({
    imports: [
        GraphQLModule.forRoot({
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
            context: ({ req,  res }) => {
                return {
                    driver: v1.driver(
                        'bolt://neo4j.digisus.ch',
                        v1.auth.basic('neo4j', 'OpenSource4Ev3r'),
                    ),
                    req,
                    res,
                    ids: [],
                    createdIDs: [],
                    updatedIDs: [],
                };
            },
        }),
    ],
    providers: [
        Neo4jGraphqlInterceptor,
        UserResolver,
        BaseResolver,
    ],
})
export class GqlModule {}