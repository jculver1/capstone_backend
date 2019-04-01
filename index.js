const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
const parser = require('body-parser')
const knex = require('./knex');

app.use(cors())
app.use(parser.json())

app.get('/foods', (req, res) => {
    knex('foods')
    .then((foods) => {
      res.send(foods);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/nutrients', (req, res) => {
    knex('nutrients')
    .then((nutrients) => {
      res.send(nutrients);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))