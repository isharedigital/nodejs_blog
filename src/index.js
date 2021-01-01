const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

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

//Check path handlebars
// console.log('PATH:', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  console.log(req.body);
  res.render('search')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})