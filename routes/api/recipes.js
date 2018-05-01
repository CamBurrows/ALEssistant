const router = require('express').Router();

router.get('/recipes', function(req, res) {
  res.send('recipes api page');
});

module.exports = router;