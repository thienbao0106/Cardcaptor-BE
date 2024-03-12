import { cardResolvers } from "./card";
import { characterResolver } from "./character";
export const resolvers = {
  ...cardResolvers,
  ...characterResolver,
};
