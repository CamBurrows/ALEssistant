const router = require('express').Router();
const db = require("../../models/");

router.get('/recipes', function(req, res) {
  res.send('recipes api page');
});

module.exports = router;