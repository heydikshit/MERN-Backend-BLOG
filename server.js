const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectdatabase = require('./config/connectDB');



//env config 
dotenv.config();

//router 
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')


//connect db mongosdb connection
connectdatabase();


//rest object 
const app = express();

//middlewares 

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes 
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

//port 

const PORT = process.env.PORT || 8080 //get through .env file 

//listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white);
});