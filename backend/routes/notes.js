const express	= require('express');
const router	= express.Router();

const { body, query, matchedData, validationResult } = require('express-validator');

const fetchuser	= require('../middleware/fetchuser');
const Notes		= require('../models/notes');

// ROUTE 1: Create a User using: GET "/api/notes/fetchallnotes". Login required
router.route('/fetchallnotes').get(fetchuser, async (req, res) => {
	try{
		const notes = await Notes.find({user : req.user.id})
		res.json(notes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Add Note using: POST "/api/notes/addnote". Login required
router.route('/addnote').post( fetchuser, [
		body("title", "Title is required").isLength({ min: 3 }),
		body("description", "Desc Should be max 5 chars").isLength({ min: 5 })
	], async (req, res) => {		
		try{
			// If there are errors, return Bad request and the errors
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const {title, description, tag} = req.body;
			
			const notes = new Notes ({
				title, description, tag, user: req.user.id
			});
			
			const saveNote = await notes.save();
			
			res.json(saveNote);
			
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
})

module.exports= router