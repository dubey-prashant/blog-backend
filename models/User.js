const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: String,
  img: String,
  googleId: String,
  githubId: String
})

module.exports = mongoose.model('user', userSchema)