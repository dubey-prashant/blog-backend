const jwt = require("jsonwebtoken")

const verifyJWT = (req, res, next) => {
  // console.log(req.headers.authorization)
  const reqToken = req.headers.authorization

  try {
    const verifiedUser = jwt.verify(reqToken, process.env.JWT_SECRET)
    req.user = verifiedUser
  } catch (err) {
    res.status(400).send(err)
  }

}

module.exports = verifyJWT