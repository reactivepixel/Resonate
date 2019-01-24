import path from "path";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./graphQL/schema";
import resolvers from "./graphQL/resolvers";
import db from "../db/models";

// DB Manual Testing String
// db.Orgs.findAll({where: {id: 1}, include: [{ all: true, nested: true }]}).then(data => {
//   console.log('====', data[0].contractors.fullName);
  
// })

import morgan from "morgan";

const port = process.env.REACT_APP_DB_PORT || 4000;

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

// Instance Express
const app = express();

// Attach Route Debugger to Express
app.use(morgan('combined'))

// Attach Apollo to Express
server.applyMiddleware({ app });

// Open public folder for direct access
app.use(express.static("build"));

// Home route to allow for Client-side routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'gql-index.html'));
});

// Verify that Sequelize models are configured as expected
db.sequelize.sync().then(() => {
  // Launch Express Server
  app.listen({ port: port }, () => {
    console.log(`Static File Server ready at http://localhost:${port}`)
    console.log(`🚀 GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`)
  });
});
