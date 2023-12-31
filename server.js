const express =require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');

const items = require('./routes');



const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
.then(()=> console.log("Mongo db connected..."))
.catch(err => console.log(err));

//use routes
/* app.use('/api/items', items); */

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));