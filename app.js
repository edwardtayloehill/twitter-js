const express = require('express');
//we invoke express and now have an application
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
nunjucks.configure('views', { noCache: true });
//set up a port
const port = 3000;

app.listen(port, (request, response) => {
  console.log("I am stoked on port:", port);
})

app.use(function (request, response, next) {
    // do your logging here
    console.log(request.method, request.path)
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next()
})

app.use("/special/", function(){
  console.log("You are in the special place");
})

app.get("/", (request,response) => {
  response.send("Hello world")

})

app.get("/news", (request,response) => {
  response.send("No news is good news")
})

app.get("/index", (request, response) => {
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  response.render( 'index', {title: 'Hall of Fame', people: people} );
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
