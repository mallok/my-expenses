const express = require('express');
const router = express.Router();
const User = require('../../models/user.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({response: 'Welcome to MyExpenses'})
});

router.use('/', require('./user.js'));

module.exports = router;
