var express = require('express');
var router = express.Router();

let lista = require('../data');
/* GET home page. */
router
  .get('/', function(req, res, next) {
  res.render('index', { title: 'My to do list', lista });
  })
  .get('/add', function (req, res) {
		res.render('add', { title: 'Add New List' });
  })
  .get('/:id/edit', function (req, res) {
		//find flight by ID
		let f = lista[req.params.id];
		console.log('Lista-->', f);
		if (f) {
			res.format({
				//HTML response will render the 'edit.jade' template
				html: function () {
					res.render('edit', { text: f });
				},
				//JSON response will return the JSON output
				json: function () {
					res.json(f);
				}
			});
		}
	})
  .post('/', function (req, res, next) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var number = req.body.number;
    var dato = req.body.dato;
    //call the create function for our database
    let item = {
      number,
      dato
    };
    
    lista[number] = item;
    console.log(lista);
    //res.redirect("/");
    res.format({
      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
      html: function () {
        // If it worked, set the header so the address bar doesn't still say /adduser
        res.location("");
        // And forward to success page
        res.redirect("/");
      },
      //JSON response will show the newly created blob
      json: function () {
        res.json(lista);
      }
    });
  })
  .post('/:id/delete', function (req, res) {
		//find flight by ID
		delete lista[req.params.id];

		res.format({
			//HTML returns us back to the main page, or you can create a success page
			html: function () {
				res.redirect("/");
			},
			//JSON returns the item with the message that is has been deleted
			json: function () {
				res.json(lista);
			}
		});
	})
  .post('/:id/update', function (req, res) {
		var number = req.body.number;
		var dato = req.body.dato;
		//call the create function for our database
		let item = {
			number,
			dato
		};
		//flights.push(item);
		lista[req.params.id] = item;
		console.log(lista);
		//res.redirect("/");
		res.format({
			//HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
			html: function () {
				// If it worked, set the header so the address bar doesn't still say /adduser
				res.location("");
				// And forward to success page
				res.redirect("/");
			},
			//JSON response will show the newly created blob
			json: function () {
				res.json(lista);
			}
		});
	});


	/**/
module.exports = router;
