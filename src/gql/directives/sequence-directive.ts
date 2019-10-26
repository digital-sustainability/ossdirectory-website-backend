import { SchemaDirectiveVisitor } from "graphql-tools";
import { GraphQLField } from "graphql";
import { tinkerInfo } from "./info-manipulator";
import { v1 } from "neo4j-driver";
import { Integer, Record } from "neo4j-driver/types/v1";

export class SequenceDirective extends SchemaDirectiveVisitor {

    // visitSchema(schema: GraphQLSchema) {}
    // visitScalar(scalar: GraphQLScalarType) {}
    // visitObject(object: GraphQLObjectType) {}
    visitFieldDefinition(field: GraphQLField<any, any>) {

        const { resolve } = field;

        field.resolve = async (root, args, context, info) => {

            tinkerInfo(context, info);
            const resolved = await resolve.call(this, root, args, context, info);

            context.ids.push(v1.types.Integer.fromNumber(resolved._id)); // TODO: Adapt for multiple ids

            const query = `MATCH (n) WHERE ID(n) IN $ids RETURN n`;

            const session = context.driver.session();

            return session.run(query, { ids: context.ids }).then((result) => {
                session.close();
                const records: Record[] = result.records;
                const sequences = [];
                records.forEach((record, index) => {
                    const node = record.get(0);
                    const properties = node.properties;
                    sequences.push({ sequence: properties.sequence, id: node.identity.low }); // order of index ressembles return order (hopefully)
                });

                fillSequenceField(resolved, sequences);

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

function fillSequenceField(object, sequences: Array<{ sequence: string, id: number }>) {
    if (object instanceof Array) {
        for (let item of object) {
            fillSequenceField(item, sequences);
        }
    }
    else if ( object != null && typeof object === 'object') {
        for (let field of Object.keys(object)) {
            if (field === '_id') {
                const sequence = sequences.find(
                    (value) => value.id === parseInt('' + object._id, 10));
                object.sequence = sequence.sequence;
            }

            fillSequenceField(object[field], sequences);
        }
    }
}