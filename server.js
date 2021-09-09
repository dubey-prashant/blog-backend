if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const articlesRoute = require('./routes/articlesRoute')
const authRoute = require('./routes/authRoute')
const cors = require('cors')
require("./configs/passportConfig")

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


app.use(passport.initialize())

//  @routes
app.use('/api/articles', articlesRoute)
app.use('/auth', authRoute)
