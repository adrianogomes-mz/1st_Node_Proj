//Importar funcionalidades do express
//Importar módulo express para dentro da variável express
const express = require('express');

//Import CORS - used for security
const cors = require('cors');

//Import routes from routes file (used ./ to show that it is a file, not a package, to go back a directory use ../)
const routes = require('./routes');

//Variável que vai armazenar a aplicação
const app = express();

app.use(cors());

//Chamar o json para o corpo das requisições do objecto ser entendível, corigir erro undifined
app.use(express.json());

//To enable the use of routes
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * GET: Buscar Informação no Backend
 * POST: Criar uma Informação no Backend
 * PUT: Alterar uma Informação no Backend
 * DELETE: Deletar uma Informação no Backend
 */

/**
 * Tipos de Parâmetros
 * Query: Parâmetros nomeados, enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Utilizados para Identificar os Recursos
 * Request Body: Corpo da Requisição, usado para criar ou alterar recursos
 */

 /**
  * DATABASE
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  * How to Access:
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


//Mandara a aplicação ouvir a porta 3333
app.listen(3333);

