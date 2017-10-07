const express = require("express");
const validator = require("validator");
const passport = require("passport");

const router = new express.Router();

function validateLoginForm(payload) {
	const errors = {};
	let isFormValid = true;
	let message = '';

	if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please enter your username.';
	}

	if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
		isFormValid = false;
		errors.username = 'Please enter your password.';
	}

	return {
		success: isFormValid,
		message,
		errors
	};	
}	

router.post("/login", (req, res) => {
	const validationResult = validateLoginForm(req.body);
	if (!validationResult.success) {
		return res.status(400).json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		});
	}
	return res.status(200).end();

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