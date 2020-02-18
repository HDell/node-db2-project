//set up
const express = require('express');
//routes
const router = express.Router();
//middleware
const CarsDB = require('../data/carsDB.js');
//CRUD
router.get('/', (req, res) => {
    CarsDB.get().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.get('/:id', (req, res) => {
    const {id} = req.params;
    CarsDB.getById(id).then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({err: "The car with the specified ID does not exist."})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.post('/', (req, res) => {
    const car = req.body;
    if (!(car.VIN && car.Make && car.Model && car.Mileage)) {
        res.status(400).json({err: "Car is missing VIN, make, model, and/or mileage."});
    } else {
        CarsDB.insert(account).then(response => {
            res.status(201).json(response);
        }).catch(err => {
            console.log(err);
            res.status(500).json({err: "Sorry. The server experienced an error."});
        });
    }
});
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const car = req.body;
    if (!(car.VIN && car.Make && car.Model && car.Mileage)) {
        res.status(400).json({err: "Car is missing VIN, make, model, and/or mileage."});
    } else {
        CarsDB.update(id, account).then(response => {
            if (response) {
                res.status(200).json(response);
            } else {
                res.status(404).json({err: "The car with the specified ID does not exist."})
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({err: "Sorry. The server experienced an error."});
        });
    }
});
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    CarsDB.remove(id).then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({err: "The car with the specified ID does not exist."})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
//export
module.exports = router;