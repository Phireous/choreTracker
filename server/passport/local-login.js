const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');

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

      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
});