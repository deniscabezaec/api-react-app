'use strict'

var express = require("express"), // Cargamos el módulo de express
    bodyParser  = require("body-parser"), // Cargamos el módulo de body-parser
    app = express(), // Llamamos a express para poder crear el servidor
    http = require("http"),
    server = http.createServer(app),

    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    port = 3000;

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/hola', function(req, res) {
   res.status(200).send("API Rest for React App");
});

app.use(router);
/*'mongodb://root:ak123456@alexkbza.com:27017/bdd-react-app',*/
/*'mongodb://root:lmery1997@merylema.com:27017/ProjectGyA'*/
mongoose.connect('mongodb://root:ak123456@alexkbza.com:27017/bdd-react-app', { useNewUrlParser: true})
    .then(() => {

        console.log("La conexión a la base de datos se ha realizado correctamente");
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(port, () => {
            console.log("Servidor en ejecución");
        });
    })
    .catch(err => console.log('ERROR: connecting to Database. ' + err));

module.exports = app;