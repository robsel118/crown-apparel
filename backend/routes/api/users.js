var mongoose = require("mongoose");
var router = require("express").Router();
var passport = require("passport");
var User = mongoose.model("User");
var auth = require("../auth");

router.get("/", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }

      return res.json({ user: user.toAuthJSON() });
    })
    .catch(next);
});

router.post("/", function(req, res, next) {
  var user = new User();
  console.log(req.body);
  const { username, email, password } = req.body.user;

  user.username = username;
  user.email = email;
  user.setPassword(password);

  user
    .save()
    .then(() => res.json({ user: user.toAuthJSON() }))
    .catch(next);
});

router.post("/login", function(req, res, next) {
  if (!req.body.user.email)
    return res.status(422).json({ errors: { email: "can't be blank" } });

  if (!req.body.user.password)
    return res.status(422).json({ errors: { password: "can't be blank" } });

  passport.authenticate("local", { session: false }, function(err, user, info) {
    if (err) return next(err);

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.put("/", auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user) {
    if (!user) return res.sendStatus(401);

    const { username, email, password } = req.body.user;

    if (username) user.username = username;

    if (email) user.email = email;

    if (password) user.setPassword(password);

    user
      .save()
      .then(() => res.json({ user: user.toAuthJSON() }))
      .catch(next);
  });
});

router.get("/logout", function(req, res, next) {
  req.session.destroy(function(err) {
    return res.redirect("/");
  });
});

module.exports = router;
