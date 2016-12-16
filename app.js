var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('app'));

app.listen(3000,function(){
  console.log("Running at Port 3000");
});

app.get('/',function(req,res){
  res.send("Hello world");
  console.log("Hello");
});

 
