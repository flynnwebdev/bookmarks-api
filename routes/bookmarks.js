var express = require('express')
var router = express.Router()
var postgres = require('postgres')
const { BookmarkModel } = require('../schema')
// var sql = postgres('postgres://postgres:postgres@localhost:5432/bookmarks')

// const bookmarks = [
//   { title: "google", url: "https://google.com", description: "cool new search engine" },
//   { title: "facebook", url: "https://facebook.com", description: "cool new social media site" }
// ]

/* GET users listing. */
router.get('/', async function (req, res) {
  // const bookmarks = await sql`SELECT * FROM bookmarks`
  const bookmarks = await BookmarkModel.find()
  console.log(bookmarks)
  res.send(bookmarks)
})

// router.post('/', async function (req, res) {
//   const { title, url, description } = req.body
//   await sql`insert into bookmarks values (${title}, ${url}, ${description})`
//   res.sendStatus(201)
// })

module.exports = router
