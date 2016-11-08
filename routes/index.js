'strict mode'

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { showForm: true, tweets: tweets } );

});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { showForm: true, tweets: list , name: name} );
});

router.get('/tweets/:id', function(req, res) {
  var id = +req.params.id;
  var list = tweetBank.find( {id: id} );
  res.render( 'index', {tweets: list} );
});




module.exports = function (io) {
  // ...
  // route definitions, etc.
  // ...
  return router;
};


//module.exports = router;


// router.get("/stylesheets/style.css", (request,response) => {
//   response.sendfile((request.path));
// })



//********************************************
//This is our code from the start of the workshop
//********************************************

// app.use("/special/", function(){
//   console.log("You are in the special place");
// })
//
// app.get("/", (request,response) => {
//   response.send("Hello world")
//
// })
//
// app.get("/news", (request,response) => {
//   response.send("No news is good news")
// })
//
// app.get("/index", (request, response) => {
//   var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   response.render( 'index', {title: 'Hall of Fame', people: people} );
// })
