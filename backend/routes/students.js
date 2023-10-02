//const router			= require("express").Router();

const express			= require('express');
const router			= express.Router();

const FetchUser			= require('../middleware/fetchuser');
//const StudentController = require("../controllers/students.controller");
const { body } = require('express-validator');
const {
	listBooks, addStudent,
} = require("../controllers/students.controller");

//const { body, validationResult } = require('express-validator');
const userDataValidateChainMethod 		= require("../validations/students.validation");

//router.get('/add_student2', listBooks);
router.post('/add_student', FetchUser, [
	body('roll_num')
    .exists({ checkFalsy: true }).withMessage('Roll Num is required')
    .isString().withMessage("Roll num should be string")
	.notEmpty().withMessage('Roll Num is required')
	.isLength({min: 3}).withMessage('Roll Num must be atleast 3 digits')
], addStudent);
//router.route('/add_student2').post( studentDataValidate, listBooks);










// ROUTE 1: Create a User using: GET "/api/notes/fetchallnotes". Login required
/*router.route('/get_student').get(FetchUser, async (req, res) => {
	try{
		const studentInfo = await Students.find({user : req.user.id})
		res.json(studentInfo);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})*/

// ROUTE 2: Add Note using: POST "/api/notes/addnote". Login required
/*router.route('/add_student').post( FetchUser, [
	body('roll_num').isString().notEmpty().withMessage('Roll Num is required').isLength({min: 3}).withMessage('Roll Num must be atleast 3 digits'),
	body('class_name', 'Class Name is required').notEmpty(),
	body('class_color', 'Class Color is required').notEmpty(),
	body('class_session', 'Class Session is required').notEmpty()], async (req, res) => {
	try{
		// If there are errors, return Bad request and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		
		const { roll_num, class_name, class_color, class_session } = req.body
		const studentObj = {
			user: req.user.id,
			roll_num: roll_num,
			class_name: class_name,
			class_color: class_color,
			class_session: class_session			
		}
		
		const saveStudent = await Students.create(studentObj)
		res.json(saveStudent)
		
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})
*/


/*// ROUTE 3: Update Note using: PUT "/api/notes/updatenotes". Login required
router.route('/updatenotes/:id').put( FetchUser, [
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
router.route('/deletenotes/:id').delete( FetchUser, async (req, res) => {
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
})*/

module.exports = router;