const router = require('express').Router();

router.get('/ingredients', function(req, res) {
  res.send('ingredients api page');
});

module.exports = router;