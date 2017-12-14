const express = require('express');
const router = express.Router();
const User = require('../../models/user.js');
const prefix = '/user'; //?/api/user??

module.exports = (app) => {
  app.use('/api', router)

  router.post('/login', (req, res, next) => {
    res.json({reponse: 'Login'});
  });
  
  /**
   * Register a new User.
   * If the email exists, return an error, otherwise
   * create a new user, hash the password using bcrypt.
   */
  router.post(prefix, (req, res, next) => {
    User.register(req.body)
      .then(usr => {
        res.status(201).json({response: 'User has been successfully created.'});
      })
      .catch(err => {
        res.status(err.status || 400).json(err);
      })
  });
  
  router.put(prefix, (req, res, next) => {
    res.json({reponse: 'this is a put method'});
  });
  
  router.get(`${prefix}:id`, (req, res, next) => {
    res.json({response: 'get current user'})
  });


  return router
}
