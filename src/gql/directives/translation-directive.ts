import { SchemaDirectiveVisitor } from "graphql-tools";
import { GraphQLField } from "graphql";
import { tinkerInfo } from "./info-manipulator";

export class TranslationsDirective extends SchemaDirectiveVisitor {

    // visitSchema(schema: GraphQLSchema) {}
    // visitScalar(scalar: GraphQLScalarType) {}
    // visitObject(object: GraphQLObjectType) {}
    visitFieldDefinition(field: GraphQLField<any, any>) {

        const { resolve } = field;
        const lang: string[] = this.args.lang || ["de", "fr", "en"];
        const fieldName: string = this.args.fieldName || "translations";

        field.resolve = async (root, args, context, info) => {

            tinkerInfo(context, info);
            const resolved = await resolve.apply(null, [root, args, context, info]);

            const returnType: any = info.returnType;
            const translationType = returnType._fields[fieldName].type.ofType.name;

            const query = `MATCH (root) WHERE ID(root) = ${resolved._id}
                UNWIND $languages as language
                MATCH (lang:Language { short: language })
                MERGE (root)-[:TRANSLATION]->(trans:${translationType} :Translation)-[:LANGUAGE]->(lang)
                RETURN trans;
            `;

            const session = context.driver.session();

            return session.run(query, { languages: lang}).then((result) => {
                const translations = result.records.map(element => {
                    const node = element.get(0);
                    context.createdIDs.push( node.identity );
                    context.ids.push ( node.identity );
                    return { _id : node.identity.low, sequence: null, ...node.properties };
                });

                resolved[fieldName] = translations;

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