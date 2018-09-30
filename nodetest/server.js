//server.js
const express = require('express');
  server = express();

sever.set('port', process.eventNames.PORT || 3000);

//basic routes pattern: server.VERB('route',callback);

server.get('/',(request, response)=>{
  response.send('Home Page')
});

server.get('/about',(request, response)=>{
  response.send('About Page')
});

//Express error handling middleware
server.use((request,response)=>{
  response.type('text/plain');
  response.status(505);
  response.send('Error page');
});

//binding to port
server.listen(3000,()=>{
  console.log('Express server created at port 3000');
});

