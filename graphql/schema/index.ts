import { buildSchema } from "graphql";
import { types } from "./types";

export const schemas = buildSchema(
  `
    ${types}
    schema {
        query: RootQuery 
        mutation: RootMutation
    }
  `
);
