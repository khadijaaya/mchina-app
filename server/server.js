const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//DOTENV 
dotenv.config()

//MONGODB CONNECTION
connectDB();

//REST OBJECT
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.use("/api/v1/auth", require("./routes/userRoutes"));

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,() =>{
  console.log(`Server Running ${PORT}`.bgGreen.white);
})

