const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/mydatabase";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
		});
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
}

module.exports = connectDB;