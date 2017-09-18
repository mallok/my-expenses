const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: 'string',
    index: {
      unique: true,
      dropDups: true
    }
  },
  password: {
    type: 'string'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User
