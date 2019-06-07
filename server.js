// create server
var express = require('express')
var app = express()
var cats = require('./jsonData.js')

// create objects
const car = {type:"Fiat", model:"500", color:"white"};
const duck = {type: "animal", model:"DD", color:"white/yellow"}
const fullList = {car, duck}

// two endpoints which return objects, not in separate file

app.get('/', (req, res) => {
  res.json(car)
})

app.get('/all', (req, res) => {
    res.json(fullList)
})

// Start Server

app.listen(3000, () => {
  console.log('app listening on PORT 3000');
});
