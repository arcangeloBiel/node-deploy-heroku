const express = require("express");
const app = express();

 const port = process.env.PORT || 3000;

 const lista = [ 
      {Codigo: 1,  NomeRegra: 'Encarte',TipoRegra:  1, 'listaFamilia': ["Maculino", "Femenino"]},
      {Codigo: 2,  NomeRegra: 'promocão',TipoRegra:  14, 'listaFamilia': ["patricia foster", "langerie"]},
      {Codigo: 3,  NomeRegra: 'Basico',TipoRegra:  19, 'listaFamilia': ["Nico boco", "infantil"]}
    ]
 app.get("/", function (req, res) {
       res.send(lista);
 });
 
 app.listen(port, () => {
    console.log("Aplicação rodando em http://localhost:3000")
 })