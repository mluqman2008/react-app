const mongoose	= require('mongoose');
const express	= require('express');
const router	= express.Router();
const { query, matchedData, validationResult } = require('express-validator');

const User		= require('../models/Users')
//Register user POST, that dnt need to be authinticate

router.post('/',[
		query('name', 'Name is empty').trim().notEmpty(),
		query('email', 'Email is empty').isEmail()
	], (req, res) => {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			const data = matchedData(req);
			return res.send(`Hello, ${data.name}!`);
		}
		
		res.send({ errors: result.array() });
	/*const user = User(req.body);
	user.save();
	console.log(req.body);
	res.send('Hello ');*/
})

module.exports = router