var express = require('express')
var router = express.Router()

const bookmarks = [
  { title: "google", url: "https://google.com", description: "cool new search engine" },
  { title: "facebook", url: "https://facebook.com", description: "cool new social media site" }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(bookmarks)
})

module.exports = router
