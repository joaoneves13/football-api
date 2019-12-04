const express = require("express");
const port = process.env.PORT || 4000;
const db = require("./db.js");
const team = require("./team/model.js");

const app = express();

app.listen(port, () => console.log(`Listening on ${port}`));
