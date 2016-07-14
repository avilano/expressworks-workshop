const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', function(req, res){
  let filename = preocess.argv[3]
  fs.readFile(filename, function(err, data){
    if (err) return res.sendStatus(500)
    try {
      let books = JSON.parse(data)
    } catch (err) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
