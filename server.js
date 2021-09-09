if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const articlesRoute = require('./routes/articlesRoute')
const authRoute = require('./routes/authRoute')
const cors = require('cors')

const app = express()
app.use(express.json())

if (process.env.NODE_ENV !== 'production') app.use(cors())

//  @mongoDB: connect to database
mongoose.connect(process.env.MONGO_DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Running after succesfully connecting to mongodb`))
  })
  .catch(e => console.log(e))
//  @mongoDB: connection end

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())
import "./configs/passportConfig"

//  @routes
app.use('/api/articles', articlesRoute)
app.use('/api', authRoute)
