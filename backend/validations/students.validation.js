const { body } = require('express-validator');

const userDataValidateChainMethod = (req, res) => {
		const userDataValidateChainMethod = [
		  body('roll_num')
			.exists({ checkFalsy: true }).withMessage('Roll Num is required')
			.isString().withMessage("Roll num should be string")
			.notEmpty().withMessage('Roll Num is required')
			.isLength({min: 3}).withMessage('Roll Num must be atleast 3 digits'),
		  /*body("password")
			.exists()
			.withMessage("Password is required")
			.isString()
			.withMessage("Password should be string")
			.isLength({ min: 5 })
			.withMessage("Password should be at least 5 characters"),
		  body("email").optional().isEmail().withMessage("Provide valid email"),
		  body("gender")
			.optional()
			.isString()
			.withMessage("Gender should be string")
			.isIn(["Male", "Female", "Other"])
			.withMessage("Gender value is invalid"),
		  body("dateOfBirth")
			.optional()
			.isDate()
			.withMessage("DOB should be valid date"),
		  body("phoneNumber")
			.optional()
			.isString()
			.withMessage("phone number should be string")
			.custom((value) => {
			  if (value.length !== 10) {
				return Promise.reject("Phone number should be 10 digits");
			  } else {
				return true;
			  }
			}),*/
		];
	//next();
}
module.exports = userDataValidateChainMethod;