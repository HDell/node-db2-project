//set up
const express = require('express');
const router = express.Router();
//routes
const carRoute = require('./carRouter.js');
//middleware
router.use('/cars/', carRoute); //url 1st, router var 2nd
//export
module.exports = router;