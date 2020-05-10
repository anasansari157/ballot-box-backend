const User = require("../models/User");

module.exports = {
	registerUser: async function (req, res, next) {
		try {
			let user = await User.create(req.body);
			res.json({ success: true, message: "Welcome User", user });
		} catch (error) {
			console.log(error, "error");
			res.send(error.message);
		}
	},

	loginForm: async function (req, res) {
		try {
			let allUsers = await User.find({});
			res.json(allUsers);
		} catch (error) {
			res.json(error.message);
		}
	},

	loginAuth: async function (req, res, next) {
		try {
			let user = await User.find({ password: req.body.password });
			res.json({ success: true, message: "Welcome Logged In User" });
		} catch (error) {
			console.log(error, "error");
			res.send(error.message);
		}
	},
};
