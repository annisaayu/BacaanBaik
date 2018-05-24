const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const index = require('./routes/index')
const books = require('./routes/book')
const reviews = require('./routes/review')

require('dotenv').config()

const usermongo = process.env.USERMONGO
const passmongo = process.env.PASSMONGO

mongoose.connect(`mongodb://${usermongo}:${passmongo}@ds133550.mlab.com:33550/bacaan-baik`);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongoose')
});


app.use('/', index)
app.use('/books', books)
app.use('/reviews', reviews)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})
