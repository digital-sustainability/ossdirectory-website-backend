import { SchemaDirectiveVisitor } from "graphql-tools";
import { GraphQLField, GraphQLObjectType } from "graphql";
import { tinkerInfo } from "./info-manipulator";
import { currentDateTime } from "../../util/time";
import v1 from "neo4j-driver";

export class AuthenticateDirective extends SchemaDirectiveVisitor {

    // visitSchema(schema: GraphQLSchema) {}
    // visitScalar(scalar: GraphQLScalarType) {}
    // visitObject(object: GraphQLObjectType) {}
    visitFieldDefinition(field: GraphQLField<any, any>) {

        const { resolve } = field;

        field.resolve = async (root, args, context, info) => {

            if (!context.req.isAuthenticated()) {
                throw new Error("not logged in");
            }

            const result = await resolve.apply(null, [root, args, context, info]);

            return result;
        };
    }
    // visitArgumentDefinition(argument: GraphQLArgument) {}
    // visitInterface(iface: GraphQLInterfaceType) {}
    // visitUnion(union: GraphQLUnionType) {}
    // visitEnum(type: GraphQLEnumType) {}
    // visitEnumValue(value: GraphQLEnumValue) {}
    // visitInputObject(object: GraphQLInputObjectType) {}
    // visitInputFieldDefinition(field: GraphQLInputField) {}
}