const { body, validationResult } = require('express-validator');

const Students			= require('../models/students.model');

const addStudentx = (req, res, next) => {
	const { roll_num, class_name, class_color, class_session } = req.body
	const studentObj = {
		user: req.user.id,
		roll_num: roll_num,
		class_name: class_name,
		class_color: class_color,
		class_session: class_session			
	}
	
	try {
		// save data to DB
		const saveStudent = Students.create(studentObj)
		res.json({ success: true, student: saveStudent });	
	} catch (err) {
		next(err);
	}
};

function addStudent (req, res) {
	const { roll_num, class_name, class_color, class_session } = req.body
	const studentObj = {
		user: req.user.id,
		roll_num: roll_num,
		class_name: class_name,
		class_color: class_color,
		class_session: class_session			
	}
	
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ success: false, errors: errors.array() });
		}
		
		// save data to DB
		Students.create(studentObj)
		
		res.json({ success: true, student: studentObj });	
	} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
	}
};

function listBooks(req, res) {
  res.send('Home page of books route');
}


module.exports = {
	listBooks,
	addStudent,
};