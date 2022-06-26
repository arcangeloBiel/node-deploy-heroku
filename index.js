const express = require('express')
 const app = express()

 const port = process.env.port || 3000;
 app.get("/Filtro", function (req,res) {
       res.send("Ola, jakinha");
 });
 app.listen(port, () => {
    console.log('server is running')
 })