const express = require('express');
const router = express.Router();
const User = require('../../models/user.js');
const prefix = '/user';

router.post('/login', (req, res, next) => {
  res.json({reponse: 'Login'});
});

router.post(prefix, (req, res, next) => {
  res.json({reponse: 'this is a post method'});
});

router.put(prefix, (req, res, next) => {
  res.json({reponse: 'this is a put method'});
});

router.get(`${prefix}:id`, (req, res, next) => {
  res.json({response: 'get current user'})
});

module.exports = router;
