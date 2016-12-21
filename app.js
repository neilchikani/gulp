var express = require("express");
var app     = express();
var bodyParser = require("body-parser");
var path    = require("path");
var cors = require('cors');
app.use(express.static('app'));


// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   return next();
// });
//

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
	origin:'*'
}));

app.listen(3000,function(){
  console.log("Running at Port 3000");
});

app.get('/',function(req,res){
  res.send("Hello world");
  console.log("Hello");
});

app.post('/',function (req,res) {
  var data = req.body;
	console.log(data);
	res.sendStatus(200);
});

