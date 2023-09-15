const express	= require('express');
const connectDB = require('./db');
const port 		= 3000;
// express
const app = express();
app.use(express.json()); //body parser

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

connectDB(); //connect to database

app.listen(port, () => console.log(`Server is listening on port ${port}`));


