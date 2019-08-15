const Hclases = require('./clases.model.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Clases content can not be empty"
        });
    }

    // Create a Class
    const hclases = new Hclases({
        idmateria: req.body.idmateria,
        laboratorio: req.body.laboratorio || "No product title",
        dia: req.body.dia,
        horainicio: req.body.horainicio,
        horafinal: req.body.horafinal,
        docente: req.body.docente,
        materia: req.body.materia,
        nivel: req.body.nivel,
        carrera: req.body.carrera
    });

    // Save Product in the database
    hclases.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    Hclases.find()
    .then(hclases => {
        res.send(hclases);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving clases."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    Hclases.find(req.params.idmateria)
    .then(hclases => {
        if(!hclases) {
            return res.status(404).send({
                message: "Not found with id " + req.params.idmateria
            });            
        }
        res.send(hclases);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Clases not found with id " + req.params.idmateria + " Error: " + err.name
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.idmateria
        });
    });
};

// Update a product
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "idMateria content can not be empty"
        });
    }

    // Find and update product with the request body
    Hclases.findByIdAndUpdate(req.params.idmateria, {
        idmateria: req.body.idmateria,
        laboratorio: req.body.laboratorio || "No product title",
        dia: req.body.dia,
        horainicio: req.body.horainicio,
        horafinal: req.body.horafinal,
        docente: req.body.docente,
        materia: req.body.materia,
        nivel: req.body.nivel,
        carrera: req.body.carrera
    }, {new: true})
    .then(hclases => {
        if(!hclases) {
            return res.status(404).send({
                message: "Materia not found with id " + req.params.idmateria
            });
        }
        res.send(hclases);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Clases not found with id " + req.params.idmateria
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.idmateria
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Hclases.remove(req.params.idmateria)
    .then(hclases => {
        if(!hclases) {
            return res.status(404).send({
                message: "Materia not found with id " + req.params.idmateria
            });
        }
        res.send({message: "Materia deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Materia not found with id " + req.params.idmateria
            });                
        }
        return res.status(500).send({
            message: "Could not delete materia with id " + req.params.materia
        });
    });
};