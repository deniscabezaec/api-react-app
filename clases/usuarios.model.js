const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    cedula:     String ,
    nombres:    String ,
    apellidos:  String ,
    idrol:      String ,
    rol:        String ,
    materias:   Array
    }, {
    timestamps: true
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);