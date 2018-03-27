const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('1')
  next(new Error('cuowu'))
})

app.use(function (req, res, next) {
  console.log('2')
  res.status(200).end()
})

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500).send('Somgthing broke!')
})

app.listen(3000)