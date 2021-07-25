var express = require('express');
var router = express.Router();

/* GET servicios. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.send('Hola soy la pagina de Servicios')
});

module.exports = router;
