import express from "express"
const app = express();
//aqui temos que avisar para o express que vamos usar o formato json. sem esse aviso não conseguimos testa requisiçoes do tipo body params.
app.use(express.json());
const port = 3000;


// essa e a nossa porta para testar as rotas.
// com o nodemon instalado temos como colocar um segundo parametro que e uma função.
// a função e usada para mostrar o estado do servidor no console que esta ativo.
// para isso e preciso que nos escripts do pakage.json estaja como dev para que possamos ativar o nodemon.
// o comando para ativar o nodemon e => npm run dev 
app.listen(port, () => {
    console.log("servidor ativo e rodando ⟳ ✅");
})


const bancoDeUsuarios = []


// para que haja comunicação temos que criar a rota, e o navegador sempre usa uma rota do tipo GET.
// para criamos uma rota usamos essa sintaxe onde o /users e o endereço da rota e o (request,response) e uma função.
// o resquest e a requisição e o response e a resposta que a rota vai devolver.
app.get("/users", (req, res) => {
     

    return res.status(200).json(bancoDeUsuarios)

});


app.post("/users", (req, res) => {
    bancoDeUsuarios.push(req.body)

    return res.status(201).json({message: "usuario criardo com sucesso"})
});




/*
  login para acessar o banco de dados 

  nome => primeirobancoDB
  senha => 1cdsudSK24IZ6zfS


  nao podemos perde essa senha porque é com ela que iremos acessar a nossa comunicação com
  nosso banco de dodos.
  para isso iremos também usar o prisma para conseguimos fazer a nossa comunicação no banco de dados.
  para instalar usamos o comando => npm install prisma --save-dev
  e depois temos que iniciar ele para ela trazer os arquivos necessarios .env 
  para iniciar nosso prisma usamos o comando => npx prisma init.

  DATABASE_URL="mongodb+srv://primeirobancoDB:1cdsudSK24IZ6zfS@users.wdg8jek.mongodb.net/users?retryWrites=true&w=majority&appName=users"
                              ( aqui e nossa senha e nome do nosso banco                (aqui temos que colocar 
                                                                                        o nome da nossa tabela de daods 
                                                                                        no casso sera uma tabela de usuarios)
                              de dados )


  depois de criado todo esse passo a passo do prisma temos por ultimo o prisma client para que tudo rode.
  o comando para instalar o prisma client e => npm install @prisma/client 
  também teremos que dar o comando => (npx prisma db push) para que ele jogue o nosso formato de tabela no banco de dados.
  depois damos outro comando para ver esse modelo de dados que criamos no navegador => npx prisma studio
  tudo isso estara na documentação do prisma.                             
*/