const express = require("express");
const app = express();

 const port = process.env.PORT || 3000;

 app.get("/", function (req, res) {
       res.send("Ola, jakinha");
 });
 app.listen(port, () => {
    console.log("Aplicação rodando em http://localhost:3000")
 })