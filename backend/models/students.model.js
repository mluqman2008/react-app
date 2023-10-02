const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

const StudentsSchema = new Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	roll_num:{
		type: String,
		required: true
	},
	class_name:{
		type: String,
		required: true
	},
	class_color:{
		type: String,
		required: true
	},
	class_session:{
		type: String,
		required: true,
		default: "2023-2024"
	},
  	date:{
		type: Date,
		default: Date.now
	},
  
});

module.exports = mongoose.model ('students', StudentsSchema);