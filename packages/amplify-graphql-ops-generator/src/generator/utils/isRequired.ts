import { GraphQLArgument, GraphQLNonNull } from "graphql";
export function isRequired(arg: GraphQLArgument): boolean {
  return arg.type instanceof GraphQLNonNull ? true : false;
}