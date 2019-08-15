module.exports = (app) => {
    const clases = require('./clases.controller.js');
    const usuarios = require('./usuarios.controller.js');

    // Create a new Materia
    app.post('/clases', clases.create);

    // Retrieve all Materias
    app.get('/class', clases.findAll);

    // Retrieve a single Materia with idmateria
    app.get('/idclass/:idmateria', clases.findOne);

    // Update a Materia with idmateria
    app.put('/upclass/:idmateria', clases.update);

    // Delete a Materia with idmateria
    app.delete('/declass/:idmateria', clases.delete);


    // Create a new Usuarios
    app.post('/usuario', usuarios.create);

    // Retrieve all Usuarios
    app.get('/usuarios', usuarios.findAll);

    // Retrieve a single Usuarios with cedula
    app.get('/usuario/:cedula', usuarios.findOne);

    // Update a Usuarios with cedula
    app.put('/upusuario/:cedula', usuarios.update);

    // Delete a Usuarios with cedula
    app.delete('/deusuario/:cedula', usuarios.delete);
}