const Express = require("express");
const http = require("http");
const cors = require("cors");

const homeController = require("./controllers/home");

const app = Express();

app.use(cors());

app.set("view engine", "ejs");
app.use(Express.json({ limit: "50mb" }));
app.use(Express.static("public"));

app.use(Express.urlencoded({ extended: true, limit: "50mb" }));

http.createServer(app.use("/", homeController)).listen(8080, () => {
  console.log("Ok!");
});

