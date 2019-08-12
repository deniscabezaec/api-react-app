// Utilizar funcionalidades del Ecmascript 6
'use strict'

// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');

// *Cargamos el fichero app.js con la configuración de Express
var app = require('./app');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3000;

// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;

// Usamos el método connect para conectarnos a nuestra base de datos
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