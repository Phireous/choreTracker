const jwt = require('jsonwebtoken');
const User = require("../model/user");
const PassportLocalStrategy = require('passport-local').Strategy;


module.exports = new PassportLocalStrategy({
  username: 'username',
  password: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    username: username.trim(),
    password: password.trim()
  };

  return User.findOne({ username: userData.username }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect username or password');
      error.name = 'IncorrectCredentialsError';
      

      return done(error);
    }

    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect username or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      const token = jwt.sign(payload, "Secret");
      const data = {
        username: user.username
      };

      return done(null, token, data);
    });
  });
});