import { Resolver, ResolveProperty, Args, Parent, Context, Query, Info } from "@nestjs/graphql";
import { v1 } from "neo4j-driver";

@Resolver('Base')
export class BaseResolver {

    @Query()
    async findBySequence(
        @Args('sequence') sequence: string,
        @Context('driver') driver: v1.Driver,
        @Info() info: any)
    {
            const session = driver.session();
            const statement = "MATCH (node) WHERE node.sequence = $sequence RETURN node, labels(node)";
            const result = session.run(statement, { sequence });
            return result.then((res) => {
                const list = res.records.map(record => {
                    const type = record.get('labels(node)')[0];
                    return type;
                });
                return list[0];
            });
    }

    @Query()
    async isLoggedIn() {
      return true;
    }
}