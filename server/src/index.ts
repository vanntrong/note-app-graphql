import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import "module-alias/register";
import { AppContext } from "./contexts/app.context";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";
import "./loaders/firebase.loader";
import { authorizationJWT } from "./middlewares/authorization";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<AppContext>({
  typeDefs: typeDefs,
  resolvers: resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function bootstrap() {
  await server.start();

  app.use(
    cors(),
    authorizationJWT,
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }: { req: any }) => {
        return {
          uid: req.uid,
        };
      },
    })
  );

  httpServer.listen({ port: 4000 }, () => {
    console.log("Apollo Server on http://localhost:4000/graphql");
  });
}

bootstrap();
