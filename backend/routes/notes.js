const express	= require('express');
const router	= express.Router();

const { body, validationResult } = require('express-validator');

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
	body("description", "Desc Should be max 5 chars").isLength({ min: 5 })], async (req, res) => {		
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

// ROUTE 3: Update Note using: PUT "/api/notes/updatenotes". Login required
router.route('/updatenotes/:id').put( fetchuser, [
	body("title", "Title is required").isLength({ min: 3 }),
	body("description", "Desc Should be max 5 chars").isLength({ min: 5 })], async (req, res) => {
	const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        const userNotes = await Notes.findById(req.params.id);
        if (!userNotes) { return res.status(404).send("Note does not exist in the DB") }

        if (userNotes.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed to update");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.route('/deletenotes/:id').delete( fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        const userNotes = await Notes.findById(req.params.id);
        if (!userNotes) { return res.status(404).send("Note does not exist in the DB") }

        // Allow deletion only if user owns this Note
        if (userNotes.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed to Delete");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports= router