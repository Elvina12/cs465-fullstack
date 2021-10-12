var express = require('express');
var router = express.Router();
const controller = require('../controllers/rooms');

/* moved anonmous function to the controller file, under main.js */
/* GET home page. */
router.get('/', controller.rooms);

module.exports = router;
