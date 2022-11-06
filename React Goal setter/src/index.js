const express = require('express')
const bodyParser = require('body-parser');
const { errorHandler } = require("./backend/Middleware/errorMiddleware")
const mongoose = require('mongoose');
require('dotenv').config({path:'./src/.env'})

const PORT = process.env.PORT; 

const app = express()

// Connecting to mongoDB
mongoose.connect(process.env.DATABASE_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connection is successful");
    })
    .catch((err)=>{
        console.log(err, "==");
    })

// ============================

app.use(bodyParser.json())

//Routes
app.use('/goals', require('./backend/routes/goalsRoutes'));
app.use('/users', require('./backend/routes/usersRoutes'));
app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`);
})