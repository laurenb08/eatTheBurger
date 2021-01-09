//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//create express app
var app = express();

//Set the port for our application
var PORT = process.env.PORT || 8080;

//Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require ("./controllers/burgers_controller.js");

app.use(routes);

// app.get("/", function (req, res) {
//     connection.query("SELECT * FROM burgers;", function (err, data) {
//         if (err) throw err;

//         res.render("index", { burgers: data });
//     });
// });

// app.post("/", function (req, res) {

//     connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function (err, data) {
//         if (err) throw err;

//         res.redirect("/");
//     });
// });

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
