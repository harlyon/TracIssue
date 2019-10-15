const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { ApolloServer } = require("apollo-server-express");
const app = require("express");
require("dotenv").config({ path: "variable.env" });

app.request(cors())

