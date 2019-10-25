const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const personRoutes = require('./routes/person');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

app.use('/', personRoutes);

mongoose.connect(
   'mongodb+srv://ljuba:ljuba@cluster0-7v7vd.mongodb.net/persons?retryWrites=true&w=majority')
   .then(res => {
      app.listen(PORT);      
   })
   .catch(err => console.log(err));
