const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query params: request.query - ficam visiveis na url, normalmente usados em GET (Usados para filtros, ordenação e paginação)
// Route params: request.params - (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Nando 2020!' });
});

app.listen(3333);