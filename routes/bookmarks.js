var express = require('express')
var router = express.Router()
var postgres = require('postgres')
var sql = postgres('postgres://xjyucolxtpzijc:ee1bd4378d7256467a79ba96e1c706bbde7520e8761383c8ac815d1be36e3a70@ec2-35-172-73-125.compute-1.amazonaws.com:5432/d3jn0nrjbugv4s')

// const bookmarks = [
//   { title: "google", url: "https://google.com", description: "cool new search engine" },
//   { title: "facebook", url: "https://facebook.com", description: "cool new social media site" }
// ]

/* GET users listing. */
router.get('/', async function (req, res) {
  const bookmarks = await sql`SELECT * FROM bookmarks`
  res.send(bookmarks)
})

router.post('/', async function (req, res) {
  const { title, url, description } = req.body
  await sql`insert into bookmarks values (${title}, ${url}, ${description})`
  res.sendStatus(201)
})

module.exports = router
