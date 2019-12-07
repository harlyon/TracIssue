const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config({ path: "./variables.env" });

const app = express();
app.use(cors());

const PORT = process.env.PORT

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers.js");
const Employee = require("./models/Employees");
const Issue = require("./models/Issues");
const User = require("./models/Users");

app.use(async (req, res, next) => {
  const token = req.headers["authorized"];
  if (token !== null) {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (error) {
      console.log("wrong token")
    }
  }
  next();
})

const server = new ApolloServer({
  typeDefs, resolvers,
  context : {
    Employee,
    Issue,
    User
  }
});
server.applyMiddleware({app});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

