/**
 * setting up express grapghql
 */
var express = require("express");
var express_graphql = require("express-graphql").graphqlHTTP;
var {schema}=require("./schema");
var {root}=require("./resolver");

var app = express();

app.use(express.static("./client"));
app.use(
  "/",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4242, () =>{ console.log("Node server listening on port 4242!")});
