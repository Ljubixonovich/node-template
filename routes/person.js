const express = require('express');
const personController = require('../controllers/person');

const router = express.Router();

router.get('/', personController.getPersons );

router.get('/a', personController.addPerson );

module.exports = router;