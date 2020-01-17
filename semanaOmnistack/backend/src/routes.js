const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes;

// Métodos HTTP: GET, POST, PUT, DELETE

//usar rotas sempre no plural - ex: devs, users ...

// Tipos de parâmetros:

// Query params: request.query - ficam visiveis na url, normalmente usados em GET (Usados para filtros, ordenação e paginação)
// Route params: request.params - (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//Mongo DB (Banco não relacional)