var express = require('express');
var router = express.Router();


/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
    res.render('index', { title: 'About Me' });
  });
  
  module.exports = router;