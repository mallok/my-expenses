const express = require('express');
const router = express.Router();
const User = require('../../models/user.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  User.register('chelote5@gmail.com', 'abc123')
    .then(u => {
      console.log(u);
      res.json({response: 'Welcome to MyExpenses', result: u})
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err)
    })
});

router.use('/', require('./user.js'));

module.exports = router;
