//Dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var mysql = require("mysql");

//create express app
var app = express();

//Set the port for our application
var PORT = process.env.PORT || 8080;

//Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Murphy212!",
    database: "wishes_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

var burgers =  {
    {
        name: 
    }
}