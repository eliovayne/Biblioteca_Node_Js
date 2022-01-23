var express = require('express');
var router = express.Router();
const librosControllers = require("../controllers/libroController");

/* GET home page. */
router.get('/', librosControllers.index );

module.exports = router;
