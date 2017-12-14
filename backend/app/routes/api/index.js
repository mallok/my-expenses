const express = require('express');
const usersRoute = require('./user.js')

module.exports = (app) => {
  const router = express.Router();
  
  app.use('/api/', router)

  /* GET home page. */
  router.get('/', (req, res, next) => {
    res.json({response: 'Welcome to MyExpenses'})
  });

  usersRoute(app)

  return router
}