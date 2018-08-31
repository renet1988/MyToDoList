var express = require('express');
var router = express.Router();

let lista = require('../data');
router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'My to do list', lista });
  })
  .get('/add', function(req, res) {
    res.render('add', { title: 'Add New List' });
  })
  .get('/:id/edit', function(req, res) {
    let f = lista[req.params.id];
    console.log('Lista-->', f);
    if (f) {
      res.format({
        html() {
          res.render('edit', { text: f });
        },
        json() {
          res.json(f);
        }
      });
    }
  })
  .post('/', function(req, res, next) {
    var number = req.body.number;
    var dato = req.body.dato;
    let item = {
      number,
      dato
    };

    lista[number] = item;
    console.log(lista);
    res.format({
      html() {
        res.location('');
        res.redirect('/');
      },
      json() {
        res.json(lista);
      }
    });
  })
  .post('/:id/delete', function(req, res) {
    delete lista[req.params.id];
    res.format({
      html() {
        res.redirect('/');
      },
      json() {
        res.json(lista);
      }
    });
  })
  .post('/:id/update', function(req, res) {
    var number = req.body.number;
    var dato = req.body.dato;
    let item = {
      number,
      dato
    };
    lista[req.params.id] = item;
    console.log(lista);
    res.format({
      html() {
        res.location('');
        res.redirect('/');
      },
      json() {
        res.json(lista);
      }
    });
  });

module.exports = router;
