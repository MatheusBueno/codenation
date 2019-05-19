const restify = require("restify");
const axios = require("axios");
const corsMiddleware = require("restify-cors-middleware");
const corrs = require("cors");

const cors = corsMiddleware({
  origins: ["*"]
});

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);
// server.use(corrs);

server.get("/api", async (req, res, next) => {
  const searchUrl = "http://www.recipepuppy.com/api?" + req.query();
  const result = await axios.get(searchUrl);
  console.log("Search: http://www.recipepuppy.com/api?" + req.query());
  res.send(result.data);
  next();
});

server.listen("3030", () => {
  console.log("Server listening in port http://localhost:3030");
});

const https = require("https");
