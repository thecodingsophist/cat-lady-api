// create server
var express = require('express')
var app = express()

// create objects
const car = {type:"Fiat", model:"500", color:"white"};
const duck = {type: "animal", model:"DD", color:"white/yellow"}
const fullList = {car, duck}

app.get('/', (req, res) => {
  res.json({'doglady': {'name': "Ellen", 'numDogs': 5}})
})

app.get('/all', (req, res) => {
    res.json()
})

// Start Server

app.listen(3000, () => {
  console.log('app listening on PORT 3000');
});
