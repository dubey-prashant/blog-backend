const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const gClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const User = require('../models/User')


const authorizeJWT = (strategy, options, req, res, next) => {
  passport.authenticate(
    strategy,
    { session: false, ...options },
    (err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        return res.status(400).send({ ...info })
      }
      if (user) {
        const authToken = jwt.sign(
          { _id: 'user._id' },
          process.env.JWT_SECRET
        )
        return res.json({ authToken })
      }
    }
  )(req, res, next)
}

// @LOCAL authentication
router.post('/register',
  (req, res, next) => {
    authorizeJWT('register', {}, req, res, next)
  }
)

router.post('/login',
  (req, res, next) => {
    authorizeJWT('login', {}, req, res, next)
  }
)

// @GOOGLE Oauth authentication
router.post('/google', (req, res) => {

  const { idToken } = req.body

  gClient.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID }).then(verifiedUser => {

    const { sub: googleId, name, email, email_verified, picture: profileImg } = verifiedUser.getPayload()

    if (email_verified) {

      User.findOne({ email }, (err, exUser) => {
        if (err) {
          console.log(err)
        }
        if (!err) {

          if (exUser) {
            const authToken = jwt.sign(
              { _id: exUser._id },
              process.env.JWT_SECRET
            )
            return res.json({ authToken })
          }
          if (!exUser) {
            User.create({
              name, email, profileImg, googleId
            }).then(newUser => {
              const authToken = jwt.sign(
                { _id: newUser._id },
                process.env.JWT_SECRET
              )
              return res.json({ authToken })
            }).catch(err => {
              console.log(err)
            })
          }
        }
      })
    }
  })

}
)

// @LOGOUT - TODO
router.get('/logout', (req, res) => {
  // TODO
})

module.exports = router