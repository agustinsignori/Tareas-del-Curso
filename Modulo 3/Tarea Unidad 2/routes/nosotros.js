var express = require('express');
var router = express.Router();

/* GET nosotros. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.send('Hola soy la pagina de Nosotros')
});

module.exports = router;
