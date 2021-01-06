var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
  {
    "customerName": "Molly Durst",
    "phoneNumber": "6147958974",
    "customerEmail": "mollymadegraphics@yahoo.com",
    "customerID": "molly"
  },
  {
    "customerName": "Ryan",
    "phoneNumber": "w456456",
    "customerEmail": "asdf",
    "customerID": "asdfsadf"
  },
  {
    "customerName": "Efrain",
    "phoneNumber": "9513482816",
    "customerEmail": "example@email.com",
    "customerID": "efrain"
  }
];

//empty array that gets populated after more than 5 newTables are created
var waitlist = [


]

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// app.get("/api/waitlist", function(req, res) {
//   return res.json(waitlist);
// });

app.post('/api/tables', function (req, res) {

  //create newTable (reservation request) and push into tables array or waitllist array

  var newTable = req.body;
  if (tables.length < 5) {
    tables.push(newTable)
  } else {
    res.send("We are booked! You are on the waiting list") //ADD number on list later
    waitlist.push(newTable)
  }

});

//starts the server listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});