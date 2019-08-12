'use strict'

var express = require("express"), // Cargamos el módulo de express
    bodyParser  = require("body-parser"), // Cargamos el módulo de body-parser
    app = express(); // Llamamos a express para poder crear el servidor

// Importamos las rutas
var user_routes = require('./routes/user');

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cargamos las rutas
app.use('/api', user_routes);

module.exports = app;