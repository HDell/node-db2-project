//set up
const express = require('express');
const server = express();
//routes
const apiRoute = require('./routes/apiRouter.js');
//middleware
server.use(express.json());
server.use('/api/', apiRoute); //url 1st, router var 2nd
//port+listener
const port = '5000';
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});