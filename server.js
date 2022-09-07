'use strict';

const express = require ('express');
const cors = require ('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validate-number');
const errorHandler = require('./error-handlers/500');


const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/',(req,res)=>{
    res.status(200).send('Home page')
})
app.get('/square',validator,(req,res)=>{
    res.status(200).send(`The squareNum ${req.query.num} is ${req.newNum}`);
})

app.use(errorHandler);




function start(port) {
    app.listen(process.env.PORT || 3001, () => console.log(`Server is up!`));
  }
  
  module.exports = {
    app: app,
    start: start
  }