const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

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
router.get('/google',
  passport.authenticate('google', { session: false, scope: ['profile', 'email'] })
)

router.get('/google/redirect',
  (req, res, next) => {
    authorizeJWT('google', {}, req, res, next)
  }
)

// @LOGOUT - TODO
router.get('/logout', (req, res) => {
  // TODO
})

module.exports = router