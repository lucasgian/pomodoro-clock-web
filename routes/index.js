var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if ( req.session.views === undefined ) {
    
    req.session.views =  0;

  } 
  
  res.render('index', { title: 'Express', cont: req.session.views });

});

/* GET fim do dia. */
router.get('/final', function(req, res, next) {

  req.session = null;

  res.render('index', { title: 'Express', cont: 0 });
  
});


module.exports = router;
