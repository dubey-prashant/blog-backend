const router = require('express').Router()
const passport = require('passport')

// routes to redirect to after Oauth
const redirectAfterOauth = {
  failureRedirect: '/auth/failure',
  successRedirect: '/',
}

// @LOCAL authentication
router.post('/register',
  passport.authenticate('register')
)
router.post('/login',
  passport.authenticate('login')
)

// @GOOGLE Oauth authentication
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
router.get('/google/redirect',
  passport.authenticate('google', redirectAfterOauth),
)

// @LOGOUT
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
module.exports = router