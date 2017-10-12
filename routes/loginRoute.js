const express = require("express");
const validator = require("validator");
const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../server/model/user");

const router = new express.Router();

function validateLoginForm(payload) {
	const errors = {};
	let isFormValid = true;
	let message = '';
	console.log(payload);
	if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please enter your username.';
	}

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
		isFormValid = false;
		errors.password = 'Please enter your password.';
	}

	return {
		success: isFormValid,
		message,
		errors
	};	
}	

// passport.serializeUser(function(user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
// 	User.getUserById(id, function(err, user) {
// 		done(err, user);
// 	});
// });

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.getUserByUsername(username, function(err, user) {
			if (err) throw err;
			if(!user) {
				return done(null, false, {message: "Unknown User"});
			}
			User.comparePassword(password, user.password, function(err, isMatch) {
				if (err) throw err;
				if(isMatch) {
					return done(null, user);
				} else {
					return done(null, false, {message: "Invalid Password"});
				}
			});
		});
	}));

router.post("/login", 
	(req, res, next) => {
	const validationResult = validateLoginForm(req.body);
	if (!validationResult.success) {
		console.log("Validation failed");
		return res.status(400).json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		});
	}
	// return res.status(200).end();

	return passport.authenticate('local-login', (err, token, userData) => {
		if(err) {
			if (err.name === 'IncorrectCredentialsError') {
				return res.status(400).json({
					success: false,
					message: err.message
				});
			}

			return res.status(400).json({
				success: false,
				message: 'Could not process the form.'
			});
		}

		return res.json({
			success: true,
			message: 'You have successfully logged in!',
			token,
			user: userData
		});
	}) (req, res, next);
});


module.exports = router;