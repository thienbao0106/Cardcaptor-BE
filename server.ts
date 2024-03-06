import mongoose from "mongoose";
import { resolvers } from "./graphql/resolver";
import { schemas } from "./graphql/schema";
import { graphqlHTTP } from "express-graphql";
import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
const port = process.env.PORT;
const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_DATABASE_ID}.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at ${port} port`);
    });
  })
  .catch((error: any) => {
    console.log(error);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemas,
    rootValue: resolvers,
    graphiql: true,
  })
);
//every route will be checked
app.use(bodyParser.json());
app.use(cors());
