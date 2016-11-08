const express = require('express');
//we invoke express and now have an application
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const path = require('path');
const bodyParser = require('body-parser');
const tweetBank = require('./tweetBank');
app.use('/', routes);

nunjucks.configure('views', { noCache: true });
//set up a port
const port = 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/tweets', urlencodedParser, function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

app.listen(port, (request, response) => {
  console.log("I am stoked on port:", port);
})

app.use(express.static(path.join(__dirname, 'public' )))

app.use(function (request, response, next) {
    // do your logging here
    console.log(request.method, request.path)
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next()
})


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

nunjucks.configure('views'); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
