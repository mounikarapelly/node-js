const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/MyDb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const bookRouter = require('./routes/books')
app.use('/books',bookRouter)

app.listen(8888, () => {
    console.log('Server started')
})