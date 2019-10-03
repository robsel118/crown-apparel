const express = require("express"),
  cors = require("cors"),
  passport = require("passport"),
  bodyParser = require("body-parser")
  session = require("express-session"),
  mongoose = require("mongoose"),
  errorhandler = require("errorhandler");

require("dotenv").config();
const app = express();

app.use(cors);

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
  mongoose.connect("mongodb://localhost/conduit");
  mongoose.set("debug", true);
}

var isProduction = process.env.NODE_ENV === "production";

require('./models/User');
require("./config/passport");

app.use(require('./routes'));

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
      errors: {
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

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, () => {
  console.log("Listening on port " + server.address().port);
});
