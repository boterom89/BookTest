//Import modules
var express=require("express");//express framework
var fs=require("fs");//filestream module

//Create server
var app=express();

//Configure routes & settings
require("./settings")(app);
require("./routes")(app);

//Start server
var server=app.listen(8080,function(){
    console.log("Server started correcty on port %d",server.address().port);
    console.log("dirname: "+__dirname);
});

