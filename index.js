const express = require("express");
const app = express();

 const port = process.env.PORT || 3000;

 const lista = [ 
     {'1': {Codigo: 1,  NomeRegra: 'Encarte',TipoRegra:  1}}
    ]


 app.get("/", function (req, res) {
   
       res.send(lista);
 });
 app.listen(port, () => {
    console.log("Aplicação rodando em http://localhost:3000")
 })