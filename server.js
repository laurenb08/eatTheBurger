//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
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
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) throw err;

        res.render("index", { burgers: data });
    });
});

app.post("/", function (req, res) {

    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function (err, result) {
        if (err) throw err;

        res.redirect("/");
    });
});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
