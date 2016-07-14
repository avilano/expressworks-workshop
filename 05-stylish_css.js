const express = require('express')
const styl = require('stylus')
const app = express()

app.use(styl.middleware(process.argv[3] || 'public'))
app.use(express.static(process.argv[3] || 'public'))

app.listen(process.argv[2] || 3000)
