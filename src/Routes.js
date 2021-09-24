const express = require('express');
const routes = express.Router();
const UsuarioController = require('./controllers/UsuarioController');

routes.get('/usuarios',UsuarioController.index);
routes.post('/cadastrar',UsuarioController.store);
routes.get('/usuario/:email',UsuarioController.detail);

module.exports = routes;