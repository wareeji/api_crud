const express = require('express')
//const { readdirSync } = require('fs')
const cors = require('cors')
const morgan = require('morgan');

const comicsRouter = require('./comics')

require('dotenv').config()

const app = express();                                                                                                                                                                                                                                                                                                                                                                                                                       
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());


app.use('/comics',comicsRouter);
app.get('/',(request,response) => response.redirect('/comics'));


app.listen(process.env.PORT || 3000,() => {
    console.log
    ('Server is listening to http://localhost:3000')
});





