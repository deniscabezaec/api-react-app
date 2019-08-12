'use strict'

// Cargamos el módulo de mongoose
var mongoose = require('mongoose'),
    // Usaremos los esquemas
    Schema   = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var clasesSchema = new Schema({
    laboratorio:    { type: String },
    dia:     { type: String },
    horainicio:  { type: Date },
    horafinal:   { type: Date },
    docente:  { type: String },
    materia:  { type: String },
    nivel: { type: String}
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Clases', clasesSchema);