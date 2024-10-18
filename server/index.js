import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import authRoute from './routes/auth.js'

// import dotenv from 'dotenv'

// // Constans
// const PORT = process.env.PORT;
// const USER = process.env.DB_USER;
// const PASSWORD =process.env.DB_PASSWORD;
// const DB_NAME = process.env.DB_NAME;

// dotenv.config();

const PORT = 3002;
const USER = 'adekvatofarvater';
const PASSWORD = 'rAaeK7nd4DvcK0Eu';

const USER_2 = 'Ivan';
const PASSWORD_2 = 'Ivan123';


const DB_NAME = 'moviebox';
const URL = `mongodb+srv://${USER_2}:${PASSWORD_2}@cluster0.iqfcv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`


const DB_NAME_2 = 'blogOun';
const URL_2= `mongodb+srv://${USER_2}:${PASSWORD_2}@cluster0.iqfcv.mongodb.net/${DB_NAME_2}?retryWrites=true&w=majority&appName=Cluster0`


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
//http://localhost:3002
app.use('/api/auth', authRoute)


// app.get('/', (req, res) =>{
//     res.json({message: 'All is fine. '})
// })


async function start() {
    try{
        await mongoose
        .connect(URL_2, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log('Connected to Mongo DB'))
        
        app.listen(PORT, ()=>{
            console.log(`Server run in http://localhost:${PORT}`); 
        })
    } catch (error){
      console.log(error); 
    }
    }
start();

// mongoose
//     .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=>console.log('Connected to Mongo DB'))
//     .catch((err)=>console.log(`DB connection error: ${err}`))

// app.listen(PORT, (err) => {
//     err ? console.log(err) : console.log(`server startered in http://localhost:${PORT}`);    
// });



