const express = require("express");
const port = process.env.PORT || 4000;
const teamRouter = require('./team/router')

const app = express();
app.use(teamRouter)
app.listen(port, () => console.log(`Listening on ${port}`));
