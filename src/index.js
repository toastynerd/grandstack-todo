const { ApolloServer } = require('apollo-server');
const { makeAugmentedSchema } = require('neo4j-graphql-js');
const { typeDefs }  = require('./schema');
const neo4j = require('neo4j-driver');

const schema = makeAugmentedSchema({ typeDefs });

const driver = new neo4j.driver(
  process.env.NEO4J_URI || 'bolt://neo4j:7687',
  neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASS || 'grand-todo-dev'),
);

const server = new ApolloServer({ 
  context: { driver },
  schema
});

server.listen(4000, '0.0.0.0').then(({ url }) => {
  console.log(`server is up right here: ${url}`);
});
