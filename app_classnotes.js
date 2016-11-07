const express = require('express');
//we invoke express and now have an application
const app = express();
//set up a port
const port = 1234;

app.listen(port, (request, response) => {
  console.log("I am stoked on port:", port);
})


app.get("/example",(request,response) => {
  console.log('REQUEST', request);
  //response.send('I am sending information')
  //response.send('<div style="background:green"> Hi I am a beautiful green dive </div>')
  response.json({kate: {hair: {color: "brown"}}});
})

//curl -i -X GET

//not sure if this is right
app.post('/example', (request, response) => {
  response.send('I have posted');
})
