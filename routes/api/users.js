const router = require('express').Router();
const db = require("../../models/");

router.get('/users', function(req, res) {
  db.User.find({})
  .then(
    dbUser => res.json(dbUser)
  )
});

router.get('/users/:id', function(req, res) {
  db.User.find({_id:req.params.id})
  .then(
    dbUser => res.json(dbUser)
  )
});

module.exports = router;