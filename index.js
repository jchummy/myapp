var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get("/my_name_is/:name", function (req, res) {
//     res.send( "My name is " + req.params.name );
// });

// app.get("/api/users/", function (req, res) {
//   res.json("{name: 'tara', age: 24}" + "," + "{name: 'Zoe', age: 28}");
// });

app.get("/api/books/", function (req, res) {
 res.json("{title: 'hello'}" + "," + "{title: 'hello'}" + "," + "{title: 'hello'}");
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

