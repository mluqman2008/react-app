const mongoose	= require('mongoose');
const express	= require('express');
const router	= express.Router();
const bcrypt	= require('bcryptjs');
const jwt		= require('jsonwebtoken');
const JWT_SECRET = 'LuqmanIsAGoodBoy$123%';

const { query, matchedData, validationResult } = require('express-validator');

const User		= require('../models/Users')
//Register user POST, that dnt need to be authinticate

router.post('/', async (req, res) => {
	try{
		
		//const result = validationResult(req);
		//if (result.isEmpty()) {
			//const data = matchedData(req);
			//console.log(data);
			//return res.send(`Hello, ${data.name}!`);
			//data.save();
			//const user = User(req.body);
			//user.save();
		//}
		//res.send({ errors: result.array() });
	
		const password	= req.body.password;
		const salt		= await bcrypt.genSalt(10);
		//const secPass	= await bcrypt.hash(password, salt);
		const secPass	= await bcrypt.hashSync(`${password}`, salt);
		
		/*bcrypt.hash(password, salt, (err, hash) => {
		  // Store hash password in DB
		  console.log(hash);
		});*/
		
		console.log(secPass);
	
		/*bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash("B4c0/\/", salt, function(err, hash) {
				password = hash;
			});
		});*/
		
		user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: secPass
		});
		
		const data = {
			user:{
				id: user.id
			}
		}
		
		//Start #50
		
		
		
		const authToken = jwt.sign(data, JWT_SECRET);
		//console.log(authToken);
		
		res.send({authToken});
		//res.send(user);
		
		//const user = User(req.body);
		//user.save();
		//console.log(req.body);
		//res.send('User Save into DB Successfully!');
		
	} catch (error){
		console.error (error.message);
		res.status(500).send("Some Error occured");
	}
	
	
//	router.post('/',[
//		query('name', 'Name is empty').trim().notEmpty(),
//		query('email', 'Email is empty').isEmail(),
//		query('password', 'Password is empty').notEmpty()
//	], (req, res) => {
//		const result = validationResult(req);
//		if (result.isEmpty()) {
//			const data = matchedData(req);
//			return res.send(`Hello, ${data.name}!`);
//			data.save();
//			//const user = User(req.body);
//			//user.save();
//		}
//		
//		
//		res.send({ errors: result.array() });
//	/*const user = User(req.body);
//	user.save();
//	console.log(req.body);
//	res.send('Hello ');*/
//})
	
	
	
})

module.exports = router