var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World! si funciona");
});

app.use(router);
mongodb://username:password@host:port/database
mongoose.connect('mongodb://root:ak123456@alexkbza.com:27017/bdd-react-app', function(err, res) {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    }
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000 - si funciona la conexion");
    });
});