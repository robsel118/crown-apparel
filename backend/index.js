var express = require("express"),
  http = require("http"),
  path = require("path"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  mongoose = require("mongoose"),
  passport= require('passport'),
  errorhandler = require("errorhandler");

require("dotenv").config();

var isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(cors());

// Normal express config defaults
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "conduit",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

if (!isProduction) {
  app.use(errorhandler());
}

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/crown');
  mongoose.set("debug", true);
}

require("./models/User");
require("./config/passport");

app.use(require("./routes"));

app.get("/", (req, res) => {
  res.send({ hello: "robert" });
});
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      'errors': {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});


const port = process.env.PORT || 3000;

var server = app.listen(port, () => {
  console.log("Listening on port " + server.address().port);
});

