const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const evalidator = require("email-validator");
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: 'string',
    index: {
      unique: true
    },
    required: true
  },
  password: {
    type: 'string',
    required: true
  }
});

const UserModel = mongoose.model('User', userSchema);

/**
 * Helper to validate email and password when registering a new user.
 * @return Object with property error with true/false whether there was an error or not
 */
const validate = (payload) => {
  let result = { error: false };
  if (!payload.email || !evalidator.validate(payload.email)) {
    result.error = true;
    result = Object.assign(result, {
      message: 'You must provide a valid email.',
      status: 409
    });
  } else if (!payload.password || payload.password === '') {
    result.error = true;
    result = Object.assign(result, {
      message: 'You must provide a non empty password.',
      status: 409
    });
  }
  return result;
}

/**
 * Register user using request payload
 * @return Promise
 */
const register = (payload) => {
  return new Promise((resolve, reject) => {
    let validation = validate(payload);
    if (!validation.error) {
      let user = new UserModel({
        email: payload.email,
        password: bcrypt.hashSync(payload.password, 10)
      });
      user.save(function(err, usr) {
        if (err) {
          let error = Object.assign({code: err.code}, {index: err.index}, {message: err.errmsg}, {status: 409});
          reject(error);
        } else {
          resolve(usr);
        }
      })
    } else {
      reject(validation);
    }
  });
}

const comparePassword = (pwd, dbpwd) => bcrypt.compareSync(pwd, dbpwd);

module.exports = {
  model: UserModel,
  register,
  comparePassword
}
