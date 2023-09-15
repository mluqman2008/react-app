const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

const UsersSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		//unique: true
	},
	password:{
		type: String,
		required: true
	},
	
  //body: String,
  //comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  //hidden: Boolean,
  
});

module.exports = mongoose.model ('user', UsersSchema);