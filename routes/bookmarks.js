var express = require('express')
var router = express.Router()
const { BookmarkModel } = require('../schema')

router.get('/', async function (req, res) {
  const bookmarks = await BookmarkModel.find()
  console.log(bookmarks)
  res.send(bookmarks)
})

router.post('/', async function (req, res) {
  const { title, url, description } = req.body
  const bookmark = await BookmarkModel.create({ title, url, description })
  res.status(201).send(bookmark)
})

module.exports = router
