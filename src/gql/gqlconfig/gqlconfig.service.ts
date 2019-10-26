import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { augmentSchema } from 'neo4j-graphql-js';

@Injectable()
export class GQLConfigService implements GqlOptionsFactory {
    createGqlOptions(): GqlModuleOptions {
        return {
            include: [
            ],
            //autoSchemaFile: 'schema.gql',
            //transformSchema: augmentSchema,
        };
    }
}
