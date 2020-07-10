var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var mongoose = require('mongoose')

var indexRouter = require('./routes/index')
var bookmarksRouter = require('./routes/bookmarks')

var app = express()
app.use(cors())

// mongoose.connect("mongodb://localhost/express-api-demo", { useNewUrlParser: true })
mongoose.connect("mongodb+srv://apidemo:FMVETvkjrUrnz0qN@cluster0.sux3i.mongodb.net/express-api-demo?retryWrites=true&w=majority", { useNewUrlParser: true })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/bookmarks', bookmarksRouter)

module.exports = app

// apidemo: FMVETvkjrUrnz0qN
