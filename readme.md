# A Collection of my code along and learning of Node.js and Express.js

[# Intro to Node](https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219)

## **Reviewed** 
Node being a single threaded environment, meaning everything responds to events. Callbacks are functions that are passed to othr functions as arguments and are called when an event happens.


Basics of writing web apps in Node:

* Writing apps with Node involves writing event handlers that get called when certain Node events occur.
* Initializing a new project via **npm init** creating a **package.json** file in root and running with **node server.js** command.
* Using modules provided via **require** and methods to interface with http operations such as **createServer()**
* Attaching an event handler for requests on the server object. The on method takes a second argument which is a callback. The callback takes two objects as arguments. The request and response objects which have information about incoming request and outgoing responses.
* Then how Node can do some of this work. Such as the response.writeHead()to attach some headers to the server’s response (status code and content type), response.write()writes to the web page. Then we use the response.end()to close the response to the server.
* Lastly telling the server to listen at specified port. The listen method takes a callback as second argument. This callback fires immediately the server is started so you can do a console.log to be sure your server is running.

**Getting used to Callbacks** If you start writing some serious JavaScript code, you might get into trouble with callback hell. Where your code becomes hard to read because there’re a lot of functions nested deeply. When this happens, you might want to find more advanced and efficient ways to replace callbacks. Look into promises.

**Routing in Node** Routing is when browsers make requests, telling the server what they are looking for. The server responds accordingly by giving them files they ask for. In Node we need to manually define routes.
* Required another module; url. It provides an easy way to work with urls.
* The .parse()method takes a url as argument and breaks it into protocol , host path and query string, etc. If you don’t get that part, it’s alright. do url.parse(request.url).pathname , it gives us the pathname or the url which is primarily what we use to route requests

# Routing can be easier with Express! -> nodetest directory
It’s a NodeJs framework for easily building web apps and APIs. Since you want to write NodeJs apps, you’ll need Express too. It makes everything easier.

In your terminal or command line, navigate to your root folder, punch npm install express --save. This installs the express package. To make it available in our program, then require it. Heres basic routing with Express:
```
//server.js
const express = require('express'),
      server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request,response)=>{
   response.send('Home page');
});

server.get('/about',(request,response)=>{
   response.send('About page');
});

//Express error handling middleware
server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});

//Binding to a port
server.listen(3000, ()=>{
```

## Database in NodeJs Apps -> node-api directory
Many people love the idea of using JavaScript for everything. There’re some databases that can fit right in. Like MongoDb, CouchDb etc. These databases are NoSQL databases.

A NoSQL database is structured in a key/value format. It is document based and data is not stored in a tabular form.

I'm using mongoDB which is a document based NoSQL database. If you’ve used a relational database like MySQL, SQL server etc. You should be conversant with the concept of databases, tables, rows and columns. It’s not so much of a different game from MongoDB.

To make things more organized, I use Mongoose which primarily enforces a Schema, basic type checks and validation to documents before saving them to Mongo. It acts as a middleman between Mongo and Node.

## Buidling RESTful APIs with Node and Express -> node-api directory
By using a REST interface, different clients hit the same REST endpoints, perform the same actions, and receive the same responses without minding the state of each other. An API end point is a single function in an API that returns data.

Creating a RESTful API involves sending data in JSON or XML format. LI tried making one with NodeJs, that returns dummy json data when a client requests via Ajax. Nothing fancy but it’ll help to understand how things work in Node. So… 
* Created **node-api** directory, **npm init** and **install --save express**
```
//users.js
module.exports.users = [
 {
  name: 'Mark',
  age : 19,
  occupation: 'Lawyer',
  married : true,
  children : ['John','Edson','ruby']
 },
  
 {
  name: 'Richard',
  age : 27,
  occupation: 'Pilot',
  married : false,
  children : ['Abel']
 },
  
 {
  name: 'Levine',
  age : 34,
  occupation: 'Singer',
  married : false,
  children : ['John','Promise']
 },
  
 {
  name: 'Endurance',
  age : 45,
  occupation: 'Business man',
  married : true,
  ```
Then export this so other apps can use it. users array is stored in the **modules.exports** object
```
//server.js
const express = require('express'),
      server = express(),
      users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/',(request,response)=>{
 response.sendFile(__dirname + '/index.html');
});

server.get('/users',(request,response)=>{
 response.json(users);
});

//Binding to localhost://3000
server.listen(3000,()=>{
 console.log('Express server started at port 3000');
});
```
Here, require('express) and create the server with express(). Also see that we’re requiring something else, users.js, remember we stored the data we’re sharing? We need it for the program to work.

Express has some methods that help send certain content to the browser. **response.sendFile()** searches for a file and sends it to the browser. Here, we use a __dirname to get the root folder where our server is running from, then we add + 'index.js' to make sure we target the right file.

The **response.json()** sends json content to requesting websites. We pass it an argument, users array which is what we’re actually sharing. The rest is familiar.
```
//index.html I put a button!
<script type="text/javascript">
  
    const btn = document.querySelector('button');
    btn.addEventListener('click',getData);
    function getData(e){
        $.ajax({
        url : '/users',
        method : 'GET',
        success : function(data){
           console.log(data);
        },
      
        error: function(err){
          console.log('Failed');
        }
   });
  } 
 </script>
```

This button when clicked prints info in the console. console.btn.addEventListent('click',getData); The getData makes a ‘GET’ ajax request. It contains a $.ajax({properties}) function that sets certain parameters likeurl, success and error etc.

In real world systems, I'd want to Create, Read, Update and Delete data. Express allows these these through htttp verbs. POST, GET, PUT and Delete respectively.

## Networking with NodeJs sockets. -> node-network directory
To do networking in NodeJs, we require the net module.

```const net = require('net');```
In Transmission Control Protocol (TCP) , there must be two endpoints; one endpoint(computer) binds to a numbered port while the other connects to the port.

I made a program that watches a file and informs connected clients when the file changes, **node-network**

Created a folder, node-network. Create three files, filewatcher.js , subject.txt , and client.js . Put this into filewatcher.js

## Building a weather website with Node.js + Express + OpenWeather API.
In this directory I made a web app where users can type in a city name and get real-time weather data instantly displayed on their screen. [Link to tutorial I used](https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b)

I developed a better idea on how to create a function CRUD app with Node. These were my steps
* Created server with Express.
* Set up index view with EJS, template engine
* Added CSS file vua public folder, and allowing Express to access this folder via ```app.use(express.static('public'));``` 
* Added body-parser middleware to make use of key-value pairs stored on req-body, specifically to access the city name the user types on the client-side. Require it.
* Set up first POST request route to log vale of 'city' to console. Tested it!
* Once POST works, modified code to take input as parameters for API call. Passed in variables to API call. Also being sure to check for errors.
* PARSE JSON to useable JS object. If ```weather.main != undefined```  I send bacl weather to the client, creating a string that displays weather with index.ejs view.
* Modify EJS to handle all possible scenarios:
```<% if(weather !== null){ %>
  <p><%= weather %></p>
<% } %>
<% if(error !== null){ %>
  <p><%= error %></p>
<% } %>
```
* Success!

## Writing a CRUD app with Node.js and MongoDB -> ProductsApp dirctory
[In this tutorial ](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb) I created an app to practice creating CRUD operations with RESTful routing.
 
I used: **Express, Mongoose, body-parser**

Created MVC directories and defined all endpoints: **controllers, models, routes, views **

Used **Postman** client for testing all requests.

Used **mLab** sandbox for remote database, connected with the Mongoose package.

Tested at each step, sucess!

## Built a Node Note Taking App -> notable directory
[In this tutorial](https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2) I used Node, Express, and MongoDB to focus on building REST routes and data interaction. I made a simple API that can be used as a foundation for any future app.

This was made to be super organized, even as a simple app in order to allow for future scaling and splitting up files in separate folder makes for better readability.

**Express, MongoDB, Mongoose, MLab, Postman, body-parser, Nodemon. **
