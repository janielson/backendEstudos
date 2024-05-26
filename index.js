const express = require("express");
const app = express();
const port = 3000;


// essa e a nossa porta para testar as rotas.
// com o nodemon instalado temos como colocar um segundo parametro que e uma função.
// a função e usada para mostrar o servidor no console que o servidor esta ativo.
// para isso e preciso que nos escripts do pakage.json estaja como dev para que possamos ativar o nodemon.
// comando para ativar o nodemon e => npm run dev 
app.listen(port, () =>{
    console.log("servidor ativo ⟳ ✅")
})

// para que haja comunicação temos que criar a rota, e o navegador sempre usa uma rota do tipo GET.
// para criamos uma rota usamos essa sintaxe onde o /users e o endereço da rota e o (request,response) e uma função.
// o resquest e a requisição e o response e a resposta que a rota vai devolver.
app.get("/users",(request,response) => {

return response.send("seja bem vindo ao mundo da programação");

}) 



