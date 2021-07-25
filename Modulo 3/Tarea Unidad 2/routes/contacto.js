var express = require('express');
var router = express.Router();

/* GET contactos. */
router.get('/', function(req, res, next) {
  res.render('contacto');
  //res.send('Hola soy la pagina de Nosotros')
});

module.exports = router;