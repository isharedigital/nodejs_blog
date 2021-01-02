const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

const router = require('./routes')
const db = require('./config/db')

//Connect to db
db.connect();

//urlencoder
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())

//Clare static files
app.use(express.static(path.join(__dirname, 'public')))

//HTTPS logegr
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//router init
router(app)

//Check path handlebars
// console.log('PATH:', path.join(__dirname, 'resources/views'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})