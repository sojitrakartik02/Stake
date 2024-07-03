const express = require('express');
const createController = require('../Controllers/createController'); 
const loginController = require('../Controllers/loginController'); 

const router = express.Router();

router.post('/create', createController); 
router.post('/login', loginController); 

module.exports = router;
