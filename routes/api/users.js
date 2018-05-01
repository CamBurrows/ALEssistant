const router = require('express').Router();

router.get('/users', function(req, res) {
  res.send('users api page');
});

module.exports = router;