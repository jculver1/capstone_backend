const express = require('express')
const app = express()
const port = process.env.PORT || 3001
var cors = require('cors')
const parser = require('body-parser')
const knex = require('./knex');

require('dotenv').config() 

app.use(cors())
app.use(parser.json())


app.get('/foods/:char', (req, res) => {
  knex('foods').where('name', `${req.params.char}`)
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

app.post('/log', (req, res, next) => {
  knex('nutrients_intakes').insert(req.body)
  .where(req.body.name, 'nutrients.name').returning('*')
  .then((nutrientData) => {
    res.send(nutrientData)
  })
  .catch((err) => {
    next(err)
  })
})

app.get('/dailylog', (req, res, next) => {
  knex('nutrients_intakes')
  .then((nutrients) => {
    res.send(nutrients);
  })
  .catch((err) => {
    next(err);
  }); 
})

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))