import { SchemaDirectiveVisitor } from "graphql-tools";
import { GraphQLField } from "graphql";
import { tinkerInfo } from "./info-manipulator";
import { currentDateTime } from "../../util/time";
import v1 from "neo4j-driver";

export class CreatedByDirective extends SchemaDirectiveVisitor {

    // visitSchema(schema: GraphQLSchema) {}
    // visitScalar(scalar: GraphQLScalarType) {}
    // visitObject(object: GraphQLObjectType) {}
    visitFieldDefinition(field: GraphQLField<any, any>) {

        const { resolve } = field;

        field.resolve = async (root, args, context, info) => {

            tinkerInfo(context, info);
            const resolved = await resolve.apply(null, [root, args, context, info]);

            context.createdIDs.push(v1.types.Integer.fromString(resolved._id));

            let user;

            // TODO: remove anonymous

            if (context.req.user) {
                user = context.req.user;
            } else {
                user = { email: 'anonymous' };
            }

            const datetime = currentDateTime();

            const query = `MATCH (u:User) WHERE u.email = $email MATCH (n) WHERE ID(n) IN $ids
                CREATE (u)-[:CREATED { datetime: $datetime }]->(n)
                RETURN u,n
            `;

            const session = context.driver.session();

            return session.run(query, { email : user.email, datetime, ids: context.createdIDs }).then((result) => {
                session.close();

                return resolved;
            }).catch((reason) => {
                return reason;
            });
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