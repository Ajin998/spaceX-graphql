const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, //if server is running f9 then it will open playground for client side grapql
  })
);

app.listen(PORT, () => {
  console.log(`Server up and running in port:${PORT}`);
});
