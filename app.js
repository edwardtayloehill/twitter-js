const express = require('express');
//we invoke express and now have an application
const app = express();
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
