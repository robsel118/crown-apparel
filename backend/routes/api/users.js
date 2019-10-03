var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/user', auth.required, function(req, res, next){
    User.findById(req.payload.id).then(function(user){
      if(!user){ return res.sendStatus(401); }
  
      return res.json({user: user.toAuthJSON()});
    }).catch(next);
  });   