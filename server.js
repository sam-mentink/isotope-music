var express = require('express')

var app = express()
app.use(express.static('.'))

var PORT = 3000

app.listen(PORT, function () {
  console.log('music to my ears', PORT)
})
