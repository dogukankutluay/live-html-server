import createServer from "./index.js";

createServer({
  port: 8000, //default : 8000
  joinHtml: "index.html", // default : index.html
  host: "localhost", //default : localhost
});
