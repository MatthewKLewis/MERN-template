//Thanks to freeCodeCamp for their code-along MERN stack tutorial
//Thanks to Esterling Accime for his Heroku deployment tutorial

//import dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//set up express app
const app = express();
const port = process.env.PORT || 5000;

//assign middleware
app.use(cors());
app.use(express.json());

//use dotenv and mongoose to connect to mongo db atlas
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log(`MongoDB connection established.`)
});

//import routers for the two data models
const spellsRouter = require('./routes/spells');
const wizardsRouter = require('./routes/wizards')

//assign the proper model to the route
app.use('/spells', spellsRouter);
app.use('/wizards', wizardsRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

//listen on port 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});