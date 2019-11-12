import { SchemaDirectiveVisitor } from 'graphql-tools';
import { GraphQLField } from 'graphql';
import { tinkerInfo } from './info-manipulator';

export class AddressDirective extends SchemaDirectiveVisitor {

  // visitSchema(schema: GraphQLSchema) {}
  // visitScalar(scalar: GraphQLScalarType) {}
  // visitObject(object: GraphQLObjectType) {}
  visitFieldDefinition(field: GraphQLField<any, any>) {

    const { resolve } = field;
    const fieldName: string = this.args.fieldName || 'address';

    field.resolve = async (root, args, context, info) => {

      tinkerInfo(context, info);
      const resolved = await resolve.apply(null, [root, args, context, info]);

      const query = `MATCH (root) WHERE ID(root) = ${resolved._id}
                CREATE (root)-[:ADDRESS]->(addr:Address)
                RETURN addr;
            `;

      const session = context.driver.session();

      return session.run(query).then((result) => {
        const address = result.records.map(element => {
          const node = element.get(0);
          context.createdIDs.push( node.identity );
          context.ids.push ( node.identity );
          return { _id : node.identity.low, sequence: null, ...node.properties };
        });

        resolved[fieldName] = address;

        return resolved;

      }).catch((reason) => {
        return reason;
      });
    };
  }
}
