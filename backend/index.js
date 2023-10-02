const express	= require('express');
const connectDB = require('./db');
const port 		= 5000;
// express
const app = express();
app.use(express.json()); //body parser

const API_PATH = '/api';

// GET home page.
//router.get("/", function (req, res) { res.redirect("/homepage") });

//Available Routes
const authRoute = require('./routes/auth');
app.use(API_PATH +'/auth', authRoute);

//app.use('/api/auth', require('./routes/auth'));
app.use(API_PATH +'/notes', require('./routes/notes'));
app.use(API_PATH +'/students', require('./routes/students'));

connectDB(); //connect to database

app.listen(port, () => console.log(`Server is listening on port ${port}`));


