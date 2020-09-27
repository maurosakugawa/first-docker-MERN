//Servidor
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

// const db = require('./db')
const movieRouter = require('./routes/movie-router')
// const PORT = 4000
const apiPort = 4000

//conexão com mongodb usando mongoose
mongoose.connect('mongodb://mongodb').then(() => {
    console.log('#######################################')
    console.log('Connected to MongoDB')
    console.log('#######################################')
}).catch(err => {
    console.log('#######################################')
    console.log(err)
    console.log('#######################################')
    process.exit(1)//quit the process
})

const commentsRoutes = require('./routes/comments')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))//form messages
app.use(bodyParser.json())//using fetch with react

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
// app.use('/comment', commentsRoutes)
app.use('/api', movieRouter)
app.listen(apiPort, () => {
    console.log('#######################################')
    console.log(`Server running on port ${apiPort}`)
    console.log('#######################################')
})
