// require the express module
const express = require("express");

//create an object from the express function wich we contains methods for making requests and starting the server
const app = express();

//create a route for a GET request to '/' - when that route is reached, run a function
app.get("/", function(request, response) {
  /* Inside of this callback we have two large objects, request and response.
        request - can contain data about the request (query, string, url parameters, form data)
        response - contains useful methods for determining how to respond (with html, text, json, etc.)

    here we going to respond by sending the text hello world!
    */
  return response.send("hello world!");
});

//when a request comes in to /instructors/ANYTHING
app.get("/instructor/:firstName", function(request, response) {
  //let's capture the "dynamic" part of the URL, wich we have called "firstName".
  //the name that we give to this dynamic  port of the URL will become a key in the params objects, wich exists on the request object

  //let's send back some text with whatever data came in the URL
  return response.send(
    `the name of this instructor is ${request.params.firstName}`
  );
});

// let's tell our server to listen on port 3000 and when the server starts, run a callback function that conseo.log's a message
app.listen(3000, function() {
  console.log(
    "The server has starte on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});
